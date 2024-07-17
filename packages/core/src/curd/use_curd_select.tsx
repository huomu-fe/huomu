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
        initialValue={initialValue === undefined && all ? all.value : undefined}
      />
    );
  }

  return null;
}

interface Params {
  all?: { label: string; value: any };
  request: () => Promise<{ label: string; value: any }[]>;
}
function useCURDSelect({ all, request }: Params) {
  const { data = [] } = useRequest(() => request());

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
          return <Select type={type} data={data} column={column} all={all} />;
        },
      };
    },
    [all, data, valueEnum]
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
