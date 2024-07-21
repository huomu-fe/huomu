import type { ProFormInstance } from '@ant-design/pro-components';
import { type ActionType } from '@ant-design/pro-components';
import { Space } from 'antd';
import type { ReactNode } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { HMTableProps } from '../table';
import { HMTable, getTableScroll } from '../table';
import { OperateDelete } from './curd_delete';
import { CURDDetail } from './curd_detail';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type CurdAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CURDProps {
  actions: CurdAction[];

  /** 表格相关 */
  hmTableProps: HMTableProps;

  /** 删除相关 */
  deleteProps?: {
    /** 显示名称索引 */
    nameIndex: string;
    /** 删除接口 */
    deleteById?: ({ id, ids }) => Promise<any>;
    deleteByRecord?: (record) => Promise<any>;
    desc?: string;
  };

  /** 新建按钮 */
  createButton?: ReactNode;

  /** 弹窗表单 */
  renderForm?: (formProps: { readonly: boolean }, info: { action: CurdAction }) => ReactNode;
  /** renderForm 的 formRef */
  renderFormInstance?: ProFormInstance;

  /** 新增接口 */
  requestAdd?: (values) => Promise<any>;
  /** 更新接口 */
  requestUpdateById?: (values) => Promise<any>;

  /** 获取详情接口 */
  requestGetById?: ({ id }) => Promise<any>;
  /** 获取详情接口，非 id 的时候 */
  requestGetByRecord?: (record) => Promise<any>;

  /** 跳转到详情的 id 所以，默认 id */
  detailIdIndex?: string;
}

interface CURDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}

const CURD = forwardRef<CURDMethods, CURDProps>(function CURD(props, ref) {
  const {
    actions,
    hmTableProps,
    createButton,
    deleteProps,
    detailIdIndex,
    renderForm,
    requestGetById,
    requestGetByRecord,
    requestAdd,
    requestUpdateById,
    renderFormInstance,
  } = props;

  const actionRef = useRef<ActionType>();
  const location = useLocation();

  useImperativeHandle(
    ref,
    () => {
      return {
        getActionRef: () => actionRef,
      };
    },
    [actionRef]
  );

  const detailProps = useMemo(
    () => ({
      renderForm,
      requestGetById,
      requestGetByRecord,
      requestAdd,
      requestUpdateById,
      renderFormInstance,
    }),
    [
      renderForm,
      requestAdd,
      requestGetById,
      requestGetByRecord,
      requestUpdateById,
      renderFormInstance,
    ]
  );

  const getHandleDelete = useCallback(
    (record) => {
      return () => {
        if (deleteProps?.deleteById) {
          return deleteProps!
            .deleteById({
              id: record.id,
              ids: [record.id],
            })
            .then(() => {
              actionRef.current?.reload();
            });
        }
        if (deleteProps?.deleteByRecord) {
          return deleteProps!.deleteByRecord(record).then(() => {
            actionRef.current?.reload();
          });
        }

        throw new Error('没有传 deleteById or deleteByRecord');
      };
    },
    [deleteProps]
  );

  const handleReload = useCallback(() => {
    actionRef.current?.reload();
  }, []);

  const newHMColumns = useMemo(() => {
    const operateColumn = {
      title: '操作',
      fixed: 'right',
      width: 120,
      render: function (_, record) {
        return (
          <Space>
            {actions.includes('read') && (
              <CURDDetail
                key={'read' + record.id}
                id={record.id}
                record={record}
                onSuccess={handleReload}
                trigger={<a>查看</a>}
                action="read"
                {...detailProps}
              />
            )}
            {actions.includes('read_detail') && (
              <Link to={`${location.pathname}/detail/${record[detailIdIndex || 'id']}`}>查看</Link>
            )}
            {actions.includes('update') && (
              <CURDDetail
                key={'update' + record.id}
                id={record.id}
                record={record}
                onSuccess={handleReload}
                trigger={<a>编辑</a>}
                action="update"
                {...detailProps}
              />
            )}
            {actions.includes('delete') && deleteProps && (
              <OperateDelete
                name={record[deleteProps.nameIndex]}
                desc={deleteProps.desc}
                onDelete={getHandleDelete(record)}
              />
            )}
          </Space>
        );
      },
    };

    if (actions.includes('read') || actions.includes('update') || actions.includes('delete')) {
      return [...hmTableProps.hmColumns, operateColumn] as HMTableProps['hmColumns'];
    }

    return hmTableProps.hmColumns as HMTableProps['hmColumns'];
  }, [
    actions,
    deleteProps,
    detailIdIndex,
    detailProps,
    getHandleDelete,
    handleReload,
    hmTableProps.hmColumns,
    location.pathname,
  ]);

  return (
    <div className="">
      <HMTable
        rowKey="id"
        {...hmTableProps}
        scroll={getTableScroll(newHMColumns)}
        actionRef={actionRef}
        toolBarRender={(...args) => [
          ...(hmTableProps.toolBarRender ? hmTableProps.toolBarRender(...args) : []),
          actions.includes('create') && (
            <CURDDetail
              key={'create'}
              onSuccess={handleReload}
              trigger={createButton}
              action="create"
              {...detailProps}
            />
          ),
        ]}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
          ...hmTableProps.search,
        }}
        hmColumns={newHMColumns}
      />
    </div>
  );
});

export { CURD };
export type { CURDProps, CURDMethods };
