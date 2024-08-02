import React from 'react';
import { ProFormSelect } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { useCallback, useMemo } from 'react';

interface SelectProps {
  initialValue?: any;
  type: 'table' | 'form';
  data: { label: string; value: any }[];
  column: { dataIndex: string };
  all: Params['all'];
}
function Select(props: SelectProps) {
  const { initialValue, type, data, column, all } = props;

  const options = useMemo(() => {
    if (type === 'table' && all) {
      return [all, ...data];
    }
    return data;
  }, [all, data, type]);

  if (type === 'table') {
    return (
      <ProFormSelect
        name={column.dataIndex}
        options={options}
        initialValue={initialValue === undefined && all ? all.value : initialValue}
        allowClear={false}
      />
    );
  }

  return null;
}

interface Params {
  all?: { label: string; value: any };
  request: () => Promise<{ label: string; value: any }[]>;
  // 先 any
  useRequestOptions?: any;
  initialValue?: any;
}
function useCURDSelect({ all, request, useRequestOptions, initialValue }: Params) {
  const { data = [] } = useRequest(() => request(), useRequestOptions);

  const initV = initialValue === undefined && all ? all.value : initialValue;

  const valueEnum = useMemo(() => {
    const obj = {};
    data.forEach((item) => {
      obj[item.value] = { text: item.label };
    });
    return obj;
  }, [data]);

  const selectColumn = useCallback(
    (column) => {
      return {
        ...column,
        valueEnum,
        renderFormItem: (_, { type }) => {
          return <Select type={type} data={data} column={column} all={all} initialValue={initV} />;
        },
      };
    },
    [all, data, initV, valueEnum]
  );

  const proFormSelectProps = {
    options: data,
  };

  return {
    selectColumn,
    proFormSelectProps,
  };
}

export { useCURDSelect };
export type { Params };
