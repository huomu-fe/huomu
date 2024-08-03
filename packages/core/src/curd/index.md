---
nav:
  title: '组件'
  order: 10
group: 'core'
toc: content
---

# CURD

> 需要非常了解 ant pro-components ProForm ProTable

`import { CURD } from '@huomu/core';`

基于 ant pro-components 通用的 CURD 组件，同时保留扩展性。

## 常规用法

```tsx
import { CURD } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';
import { ProFormText } from '@ant-design/pro-components';

let fakeData = range(10).map((item) => ({
  id: `${item}`,
  name: `name-${item}`,
  address: `address-${item}`,
}));

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeHMDeleteById(params) {
  console.log('fakeHMDeleteById', params);

  fakeData = fakeData.filter((item) => item.id !== params.id);

  return Promise.resolve({});
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

const Demo = () => {
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
    {
      title: 'address',
      dataIndex: 'address',
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'delete', 'update']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
      deleteProps={{
        nameIndex: 'name',
        deleteById: fakeHMDeleteById,
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
        </>
      )}
      requestGetById={fakeHMGetById}
      requestAdd={fakeHMAdd}
      requestUpdateById={fakeHMUpdateById}
    />
  );
};

export default Demo;
```

## action read_detail

调整 actions 为 `['read_detail']`，点击<查看>跳转到 `xxx/detail/[id]`，

```tsx ｜ pure
import { CURD } from '@huomu/core';

const Demo = () => {
  return <CURD actions={['read_detail']} ... />;
};

export default Demo;
```

## method getActionRef

获取 ProTable 的 actionRef

```tsx | pure
import { useRef } from 'react';
import { CURD } from '@huomu/core';
import { Button } from 'antd';

const Demo = () => {
  const ref = useRef<any>();

  return (
    <div>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CURD ref={ref} ... />
    </div>
  );
};

export default Demo;
```

## 获取 Table form ref

```tsx | pure
import { useRef } from 'react';
import { CURD } from '@huomu/core';

const Demo = () => {
  const formRef = useRef<any>();

  return (
    <CURD
      hmTableProps={{
        formRef,
        ...
      }}
    />
  );
};

export default Demo;
```

## 获取 detail form ref

```tsx | pure
import { CURD } from '@huomu/core';

const Demo = () => {
  const [renderFormInstance] = ProForm.useForm();

  return <CURD renderFormInstance={renderFormInstance} />;
};

export default Demo;
```
