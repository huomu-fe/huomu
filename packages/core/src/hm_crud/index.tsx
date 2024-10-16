import type { CRUDProps, CRUDDetailProps } from '@fe-free/core';
import { CRUD, CRUDDetail } from '@fe-free/core';
import { forwardRef, useCallback, useMemo } from 'react';
import type { AxiosResponse } from 'axios';
import type { CURDMethods } from '../curd';

interface HMCRUDProps extends CRUDProps {
  tableProps: CRUDProps['tableProps'] & {
    hmRequest?: (params: any & { page?: number; pageSize?: number }) => Promise<AxiosResponse<any>>;
  };
  hmRequestGetByRecord?: (record: any) => Promise<any>;
}

type HMCRUDMethods = CURDMethods;

const HMCRUD = forwardRef<HMCRUDMethods, HMCRUDProps>((props, ref) => {
  const { tableProps, hmRequestGetByRecord, ...rest } = props;
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

  const newRequestGetByRecord = useCallback(
    (record) => {
      return hmRequestGetByRecord!(record).then((res) => res.data.data);
    },
    [hmRequestGetByRecord]
  );

  return (
    <CRUD
      ref={ref}
      {...rest}
      tableProps={newTableProps}
      requestGetByRecord={hmRequestGetByRecord ? newRequestGetByRecord : props.requestGetByRecord}
    />
  );
});

interface HMCRUDDetailProps extends CRUDDetailProps {
  hmRequestGetByRecord?: (record: any) => Promise<any>;
}
const HMCRUDDetail = ({ hmRequestGetByRecord, ...rest }: HMCRUDDetailProps) => {
  const newRequestGetByRecord = useCallback(
    (record) => {
      return hmRequestGetByRecord!(record).then((res) => res.data.data);
    },
    [hmRequestGetByRecord]
  );

  return (
    <CRUDDetail
      {...rest}
      requestGetByRecord={hmRequestGetByRecord ? newRequestGetByRecord : rest.requestGetByRecord}
    />
  );
};

export { HMCRUD, HMCRUDDetail };
export type { HMCRUDProps, HMCRUDMethods, HMCRUDDetailProps };
