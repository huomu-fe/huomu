import React, { useRef } from 'react';
import type { CURDProps } from '@huomu/core';
import { CURD } from '@huomu/core';
import { Button } from 'antd';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import {
  fakeRequest,
  fakeDeleteById,
  fakeAdd,
  fakeGetById,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
  levels,
  fakeRequestSchool,
} from './data';

const Normal = () => {
  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '名字(省略)',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'delete', 'update']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
      deleteProps={{
        nameIndex: 'name',
        deleteById: fakeDeleteById,
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
          />
        </>
      )}
      requestGetById={fakeGetById}
      requestAdd={fakeAdd}
      requestUpdateById={fakeUpdateById}
    />
  );
};

function ReadDetail() {
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
  ];

  return (
    <CURD
      actions={['read_detail']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
    />
  );
}

function Ref() {
  const formRef = useRef<any>();
  const [detailFormInstance] = ProForm.useForm();

  // @ts-ignore
  window._detailFormInstance = detailFormInstance;

  const name = ProForm.useWatch('name', formRef.current);
  const detailName = ProForm.useWatch('name', detailFormInstance);

  // 不知道为啥这里 name 不生效，但是项目里是生效的。先忽略
  console.log('useWatch', name, detailName);

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
  ];

  return (
    <CURD
      actions={['create', 'read', 'update']}
      hmTableProps={{
        formRef,
        hmColumns,
        hmRequest: fakeRequest,
      }}
      detailFormInstance={detailFormInstance}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="名字"
            required
            rules={[{ required: true }]}
            initialValue={'default'}
          />
          <ProFormSwitch {...formProps} name="status" label="开启" initialValue={false} />
        </>
      )}
      requestGetById={fakeGetById}
      requestAdd={fakeAdd}
      requestUpdateById={fakeUpdateById}
    />
  );
}

function ActionRef() {
  const ref = useRef<any>();

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
  ];

  return (
    <>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CURD
        ref={ref}
        actions={[]}
        hmTableProps={{
          hmColumns,
          hmRequest: fakeRequest,
        }}
      />
    </>
  );
}

function RemoteData() {
  const hmColumns: CURDProps['hmTableProps']['hmColumns'] = [
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
      title: '等级(本地数据)',
      dataIndex: 'level',
      search: true,
      valueEnum: levels,
    },
    {
      title: 'city(远端数据)',
      dataIndex: 'city',
      search: true,
      request: async () => {
        const res = await fakeRequestCity();

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
    },
    {
      title: 'area(联动 city)',
      dataIndex: 'area',
      search: true,
      request: async (params) => {
        console.log('params', params);
        const res = await fakeRequestArea(params);

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      dependencies: ['city'],
    },
    {
      title: '学校(远端数据 label value)',
      dataIndex: 'school',
      search: true,
      valueType: 'select',
      request: () => fakeRequestSchool(),
    },
  ];

  return (
    <CURD
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
    />
  );
}

export { Normal, ReadDetail, Ref, ActionRef, RemoteData };
