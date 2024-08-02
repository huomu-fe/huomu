---
group: 'core'
toc: content
---

# useCURDSelect

`import { useCURDSelect, useCURDSelects } from '@huomu/core';`

curd select 组件，有

- table 的 column
- form 的 ProFormSelect

## 基本

```tsx
import { CURD, useCURDSelect } from '@huomu/core';
import { range } from 'lodash-es';

let fakeData = range(5).map((item) => ({
  id: `${item}`,
  name: `name-${item}`,
  city: undefined,
}));
fakeData[0].city = '广州';
fakeData[1].city = '深圳';

async function fakeRequestCity() {
  return ['广州', '深圳'];
}

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  let data = fakeData;
  if (params.city) {
    data = data.filter((item) => item.city === params.city);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: data,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

const Demo = () => {
  const citySelect = useCURDSelect({
    initialValue: '',
    all: { label: '城市（全部）', value: '' },
    request: async () => {
      const res = await fakeRequestCity();
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
  });

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
    },
    citySelect.selectColumn({
      title: '城市',
      dataIndex: 'city',
      search: true,
    }),
  ];

  return (
    <CURD
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

export default Demo;
```

## table 和 detail 用

table detail 的数据应该是独立的，所以用 useCURDSelect 没法，因此有 useCURDSelects

```tsx
import { CURD, useCURDSelects } from '@huomu/core';
import { range } from 'lodash-es';
import { ProFormText, ProFormSelect } from '@ant-design/pro-components';

let fakeData = range(5).map((item) => ({
  id: `${item}`,
  name: `name-${item}`,
  city: undefined,
}));
fakeData[0].city = '广州';
fakeData[1].city = '深圳';

async function fakeRequestCity() {
  return ['广州', '深圳'];
}

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  let data = fakeData;
  if (params.city) {
    data = data.filter((item) => item.city === params.city);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: data,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeHMGetById(params) {
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

const Demo = () => {
  const { tableCURDSelect, detailCURDSelect } = useCURDSelects({
    initialValue: '',
    all: { label: '城市（全部）', value: '' },
    request: async () => {
      const res = await fakeRequestCity();
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
  });

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
    },
    tableCURDSelect.selectColumn({
      title: '城市',
      dataIndex: 'city',
      search: true,
    }),
  ];

  return (
    <CURD
      actions={['read']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
      renderForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
          />
          <ProFormText {...formProps} name="age" label=" 年龄" required />
          <ProFormSelect name="city" label={'所属城市'} {...detailCURDSelect.proFormSelectProps} />
        </>
      )}
      requestGetById={fakeHMGetById}
    />
  );
};

export default Demo;
```

## 复杂联动

城市和区域联动

```tsx
import { useRef } from 'react';
import { CURD, useCURDSelect } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';
import { ProForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';
import { union } from 'lodash-es';

const cityAreaData = {
  广州: ['越秀', '番禺'],
  深圳: ['福田', '南山'],
};
let fakeData = range(5).map((item) => ({
  id: `${item}`,
  name: `name-${item}`,
  city: undefined,
  area: undefined,
}));
fakeData[0].city = '广州';
fakeData[1].area = '南山';
fakeData[2].city = '深圳';
fakeData[2].area = '福田';

async function fakeRequestCity() {
  return Object.keys(cityAreaData);
}

async function fakeRequestArea({ city }: { city?: string }) {
  if (city) {
    return cityAreaData[city];
  }

  return union.apply(null, Object.values(cityAreaData));
}

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  let data = fakeData;
  if (params.city) {
    data = data.filter((item) => item.city === params.city);
  }
  if (params.area) {
    data = data.filter((item) => item.area === params.area);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: data,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeHMGetById(params) {
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

async function fakeHMAdd(params) {
  console.log('fakeHMAdd', params);

  fakeData.push({
    id: fakeData.length + 1,
    ...params,
  });

  return Promise.resolve({});
}

async function fakeHMUpdateById(params) {
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

function useSelect({ formInstance }) {
  const city = ProForm.useWatch('city', formInstance);
  const citySelect = useCURDSelect({
    initialValue: '',
    all: { label: '城市（全部）', value: '' },
    request: async () => {
      const res = await fakeRequestCity();
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
  });

  const areaSelect = useCURDSelect({
    initialValue: '',
    all: { label: '区域（全部）', value: '' },
    request: async () => {
      const res = await fakeRequestArea({ city });
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
    useRequestOptions: {
      refreshDeps: [city],
    },
  });

  return {
    citySelect,
    areaSelect,
  };
}

const Demo = () => {
  const formRef = useRef<any>();

  const tableSelect = useSelect({
    formInstance: formRef.current,
  });

  const [renderFormInstance] = ProForm.useForm();
  const formSelect = useSelect({
    formInstance: renderFormInstance,
  });

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字',
      dataIndex: 'name',
      search: true,
    },
    tableSelect.citySelect.selectColumn({
      title: '城市',
      dataIndex: 'city',
      search: true,
    }),
    tableSelect.areaSelect.selectColumn({
      title: '区域',
      dataIndex: 'area',
      search: true,
    }),
  ];

  return (
    <CURD
      actions={['create', 'read', 'update']}
      hmTableProps={{
        formRef,
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
      createButton={<Button type="primary">新建</Button>}
      renderForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
          />
          <ProFormText {...formProps} name="age" label=" 年龄" required />
          <ProFormSelect
            name="city"
            label={'所属城市'}
            {...formSelect.citySelect.proFormSelectProps}
          />
          <ProFormSelect
            name="area"
            label={'所属区域'}
            {...formSelect.areaSelect.proFormSelectProps}
          />
        </>
      )}
      renderFormInstance={renderFormInstance}
      requestGetById={fakeHMGetById}
      requestAdd={fakeHMAdd}
      requestUpdateById={fakeHMUpdateById}
    />
  );
};

export default Demo;
```
