import { message, Spin } from 'antd';
import { DrawerForm, ProForm } from '@ant-design/pro-components';
import { useCallback, useMemo, useState } from 'react';
import type { CURDProps } from './curd';
import { isString } from 'lodash-es';
import classNames from 'classnames';

/**
 * create 创建
 * read 查看
 * read_detail 详情页查看
 * update 编辑
 * delete 删除
 */
type action = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

// 先不管类型
interface CURDDetailProps
  extends Pick<
    CURDProps,
    | 'requestGetById'
    | 'requestGetByRecord'
    | 'addProps'
    | 'requestAdd'
    | 'updateProps'
    | 'requestUpdateById'
    | 'detailForm'
    | 'detailFormInstance'
  > {
  action: action;
  id?: string;
  record?: any;
  trigger: any;
  /** 添加 or 修改 成功 */
  onSuccess?: () => void;

  /** 查看情况下隐藏 FormItem 的 extra，默认 true */
  hideExtraInRead?: boolean;
}

function CURDDetail(props: CURDDetailProps) {
  const {
    action,
    id,
    record,
    trigger,
    onSuccess,
    detailForm,
    requestGetById,
    requestGetByRecord,
    addProps,
    requestAdd,
    updateProps,
    requestUpdateById,
    detailFormInstance,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(id ? true : false);
  const [form] = ProForm.useForm(detailFormInstance);

  const handleFinish = useCallback(
    async (values) => {
      try {
        let result;
        if (action === 'create' && requestAdd) {
          result = await requestAdd(values);

          let content = '新建成功';
          if (addProps?.successText) {
            content = isString(addProps.successText)
              ? addProps.successText
              : addProps.successText();
          }

          message.open({
            type: 'success',
            content,
          });
        }
        if (action === 'update' && requestUpdateById) {
          result = await requestUpdateById({
            ...values,
            id,
          });

          let content = '更新成功';
          if (updateProps?.successText) {
            content = isString(updateProps.successText)
              ? updateProps.successText
              : updateProps.successText();
          }

          message.open({
            type: 'success',
            content,
          });
        }

        // 刷新
        onSuccess?.();

        // false 则取消默认行为
        if (result !== false) {
          // 关闭弹窗
          return true;
        }
      } catch (e) {
        // 由于 onFinish 吃掉了 error，所以这里自行抛出
        setTimeout(() => {
          throw e;
        }, 10);
      }
    },
    [action, requestAdd, requestUpdateById, onSuccess, addProps, id, updateProps]
  );

  const handleOpenChange = useCallback(
    async (open) => {
      if (!open) {
        // 关闭重置
        form?.resetFields();
        setIsOpen(open);
        return;
      }

      setIsOpen(open);

      if (id) {
        setLoading(true);

        let res;
        if (requestGetByRecord) {
          res = await requestGetByRecord(record);
        }
        if (requestGetById) {
          res = await requestGetById({ id });
        }

        form?.setFieldsValue(res.data.data);

        setLoading(false);
      }

      return;
    },
    [form, id, requestGetById, requestGetByRecord, record]
  );

  const children = useMemo(() => {
    if (!detailForm) {
      return null;
    }

    // 关闭的时候不需要 children
    if (!isOpen) {
      return null;
    }

    if (loading) {
      return (
        <div className="pt-[100px] flex justify-center">
          <Spin />
        </div>
      );
    }

    return (
      <div
        className={classNames('curd-detail', `curd-detail-action-${action}`, {
          'curd-detail-hide-extra': action === 'read',
        })}
      >
        {detailForm({ readonly: action === 'read' && !!id }, { action })}
      </div>
    );
  }, [isOpen, loading, detailForm, action, id]);

  return (
    <DrawerForm
      form={form}
      trigger={trigger}
      autoFocusFirstInput
      onFinish={handleFinish}
      onOpenChange={handleOpenChange}
      layout="vertical"
      readonly={action === 'read' && !!id}
      // 关闭销毁，否则会有很奇怪的 onFinish 闭包问题，怀疑 pro components bug
      drawerProps={{
        destroyOnClose: true,
      }}
    >
      {children}
    </DrawerForm>
  );
}

export { CURDDetail };
