import { range } from 'lodash-es';

const citys = {
  广州: ['白云', '黄埔', '增城'],
  深圳: ['福田', '南山', '宝安'],
};

const levels = {
  HIGH: { text: '高' },
  MEDIUM: { text: '中' },
  LOW: { text: '低' },
};

function random(length) {
  return Math.floor(Math.random() * length);
}

function randomCity() {
  return Object.keys(citys)[random(Object.keys(citys).length + 1)];
}
function randomArea(params: { city?: string }) {
  if (!params.city) {
    return undefined;
  }

  return params.city && citys[params.city][random(citys[params.city].length + 1)];
}

function randomLevel() {
  return Object.keys(levels)[random(Object.keys(levels).length + 1)];
}

function makeData(count) {
  return range(count).map((id) => {
    const city = randomCity();
    const area = randomArea({ city });

    return {
      id: `${id}`,
      name: `name-${id}`,
      city,
      area,
      level: randomLevel(),
    };
  });
}

let fakeData = makeData(100);

async function fakeRequest(params) {
  console.log('fakeHMRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData,
          success: true,
          totalSize: fakeData.length,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeDeleteById(params) {
  console.log('fakeHMDeleteById', params);

  fakeData = fakeData.filter((item) => item.id !== params.id);

  return Promise.resolve({});
}

async function fakeGetById(params) {
  console.log('fakeHMGetById', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData.find((item) => item.id === params.id),
        },
      });
    }, 1000);
  });
}

async function fakeAdd(params) {
  console.log('fakeHMAdd', params);

  fakeData.push({
    id: fakeData.length + 1,
    ...params,
  });

  return Promise.resolve({});
}

async function fakeUpdateById(params) {
  console.log('fakeHMUpdateById', params);

  fakeData = fakeData.map((item) => {
    if (item.id === params.id) {
      return {
        ...item,
        ...params,
      };
    }
    return item;
  });

  return Promise.resolve({});
}

function fakeRequestCity(): Promise<string[]> {
  return Promise.resolve(Object.keys(citys));
}

function fakeRequestArea(params?: { city?: string }): Promise<string[]> {
  if (!params?.city) {
    return Promise.resolve(Object.values(citys).reduce((prev, cur) => prev.concat(cur), []));
  }

  return Promise.resolve(citys[params.city]);
}

export {
  levels,
  fakeRequest,
  fakeDeleteById,
  fakeGetById,
  fakeAdd,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
};