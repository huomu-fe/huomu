#!/usr/bin/env node

import { Command } from 'commander';
import { buildApi } from './build_api';
import packageJSON from '../package.json';

const program = new Command();

program.version(packageJSON.version);

program
  .command('build_api')
  .description('swagger 文档生成 API 方法')
  .option('-i, --input <input>', 'package.json 所在的目录，读取 package.json 中的 swaggerDocs 字段')
  .option('-o, --output <output>', '输出 /api /swagger 的目录')
  .action(buildApi);

program.parse(process.argv);
