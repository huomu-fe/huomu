import fs from 'fs-extra';
import fetch from 'node-fetch';
import path from 'path';
import { generateApi } from 'swagger-typescript-api';
import { getPackageJSON } from '../utils';

const packageJSON = getPackageJSON();
const swaggerDocs = packageJSON.swaggerDocs;

async function code({ name }) {
  const filename = path.resolve(`./src/swagger/${name}.json`);

  console.log('code', filename);

  return generateApi({
    name: `${name}.ts`,
    output: path.resolve('./src/api'),
    input: filename,
    httpClientType: 'axios',
    // 后端接口规则是 /api/:module/xxxx, 于是 moduleIndex 为 1
    moduleNameIndex: 1,
    // @ts-ignore
    primitiveTypeConstructs: () => ({
      integer: (schema) => {
        if (schema.format === 'int64') {
          return 'string';
        }
        return 'number';
      },
    }),
  });
}

// /api/base/base-dictionary/add 得到 baseDictionaryAdd
function toCamelCase(url) {
  const parts = url.replace(/-/g, '/').replace(/_/g, '/').split('/');
  const camelCase =
    parts[3] +
    parts
      .slice(4)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  return camelCase;
}

function merge(mergeJSON, json) {
  Object.assign(mergeJSON, {
    swagger: json.swagger,
    info: json.info,
    host: json.host,
    basePath: json.basePath,
    paths: {
      ...mergeJSON.paths,
      ...json.paths,
    },
    definitions: {
      ...mergeJSON.definitions,
      ...json.definitions,
    },
  });
}

async function build({ docName, docUrl }) {
  const mergeJSON: any = {};

  const resources = await fetch(`${docUrl}/swagger-resources`).then((response) => response.json());

  for (const item of resources) {
    const data = await fetch(
      item.url.startsWith('/') ? `${docUrl}${item.url}` : `${docUrl}${item.url}`
    ).then((response) => response.json());

    merge(mergeJSON, data);
  }

  // fix，否则跑不通 generateApi
  mergeJSON.info.termsOfService = docUrl;

  // operationId 不采用原先值（后端没维护好），于是采用 url
  for (const apiPath in mergeJSON.paths) {
    const funName = toCamelCase(apiPath);
    // 只有一个方法，get post ...
    for (const method in mergeJSON.paths[apiPath]) {
      mergeJSON.paths[apiPath][method].operationId = funName;
    }
  }

  fs.writeFileSync(`./src/swagger/${docName}.json`, JSON.stringify(mergeJSON, null, 2));

  await code({ name: docName });

  console.log('build_api success');
}

async function buildApi() {
  console.log('新建 api 目录 和 swagger 目录');
  fs.rmSync('./src/api', { recursive: true, force: true });
  fs.rmSync('./src/swagger', { recursive: true, force: true });
  fs.mkdirSync('./src/api');
  fs.mkdirSync('./src/swagger');

  if (!packageJSON.swaggerDocs) {
    throw new Error('package.json swaggerDocs 未配置');
  }

  for (const item of swaggerDocs) {
    await build(item);
  }
}

export { buildApi };
