import { ProTable } from '@ant-design/pro-components';
import type { ProTableProps, ParamsType } from '@ant-design/pro-components';
import { useCallback, useMemo } from 'react';
import type { AxiosResponse } from 'axios';

function transformRequest(request) {
  return async function (params) {
    const { current: page, pageSize, ...rest } = params;

    const res = await request({
      page,
      pageSize,
      ...rest,
    });

    return {
      data: res.data.data,
      success: res.data.success,
      total: res.data.totalSize,
    };
  };
}

interface HMTableProps<DataSource = any, Params = any, ValueType = 'text'>
  extends ProTableProps<DataSource, Params, ValueType> {
  /** hm api 请求风格 */
  hmRequest?: (
    params: Params & { page?: number; pageSize?: number }
  ) => Promise<AxiosResponse<any>>;
  /** 区别 ProTable columns，默认 search: false */
  hmColumns?: NonNullable<ProTableProps<DataSource, Params, ValueType>['columns']>;
}

function HMTable<
  DataSource extends Record<string, any> = any,
  Params extends ParamsType = ParamsType
>(props: HMTableProps<DataSource, Params>) {
  const { hmRequest, request, hmColumns, columns, rowKey = 'id', ...rest } = props;

  const newRequest = useCallback(
    (params) => {
      if (hmRequest) {
        return transformRequest(hmRequest)(params);
      }
      // @ts-ignore 先忽略
      return request(params, {}, {});
    },
    [hmRequest, request]
  );

  const newColumns = useMemo(() => {
    if (hmColumns) {
      // 默认隐藏搜索，如果需要显示搜索，需要在 columns 中设置 search: true
      return hmColumns.map((column) => {
        return {
          search: false,
          ...column,
        };
      });
    }
    return columns;
  }, [columns, hmColumns]);

  return (
    <ProTable<DataSource, Params>
      cardBordered
      rowKey={rowKey}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        ...rest.pagination,
      }}
      options={false}
      // @ts-ignore 不会处理这里的 ts，或者成本大
      request={newRequest}
      // @ts-ignore 不会处理这里的 ts，或者成本大
      columns={newColumns}
      {...rest}
    />
  );
}

function getTableScroll(columns: ProTableProps<any, any>['columns'], defaultWidth = 120) {
  const scroll = { x: 0, y: undefined };

  columns?.forEach((column) => {
    if (!column.hideInTable) {
      scroll.x += Number(column.width) || defaultWidth;
    }
  });

  return scroll;
}

export { HMTable, getTableScroll };
export type { HMTableProps };
