import React, { useRef } from 'react';
import { CURD } from '@huomu/core';
import { Button } from 'antd';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import {
  fakeRequest,
  fakeDeleteById,
  fakeAdd,
  fakeGetById,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
} from './data';

const Normal = () => {
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

  const name = ProForm.useWatch('name', formRef.current);
  const detailName = ProForm.useWatch('name', detailFormInstance);

  console.log('name', name, 'detailName', detailName);
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
      actions={['create', 'read_detail']}
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
          />
        </>
      )}
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
      title: 'city',
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
      title: 'area',
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
