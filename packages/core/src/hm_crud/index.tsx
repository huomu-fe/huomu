import type { CRUDProps } from '@fe-free/core';
import { CRUD } from '@fe-free/core';
import { forwardRef, useMemo } from 'react';
import type { AxiosResponse } from 'axios';
import type { CURDMethods } from '../curd';

interface HMCRUDProps extends CRUDProps {
  tableProps: CRUDProps['tableProps'] & {
    hmRequest?: (params: any & { page?: number; pageSize?: number }) => Promise<AxiosResponse<any>>;
  };
}

type HMCRUDMethods = CURDMethods;

const HMCRUD = forwardRef<HMCRUDMethods, HMCRUDProps>((props, ref) => {
  const { tableProps, ...rest } = props;
  const newTableProps = useMemo(() => {
    if (tableProps.hmRequest) {
      return {
        ...tableProps,
        request: async (params) => {
          const { current: page, pageSize, ...rest } = params;

          const res = await tableProps.hmRequest!({
            page,
            pageSize,
            ...rest,
          });

          return {
            data: res.data.data,
            success: res.data.success,
            total: res.data.totalSize,
          };
        },
      };
    }

    return tableProps;
  }, [tableProps]);

  return <CRUD ref={ref} {...rest} tableProps={newTableProps} />;
});

export { HMCRUD };
export type { HMCRUDProps, HMCRUDMethods };
