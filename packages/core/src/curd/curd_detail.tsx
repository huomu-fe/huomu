import { message } from 'antd';
import { DrawerForm, ProForm } from '@ant-design/pro-components';
import { useCallback, useMemo, useState } from 'react';
import type { CURDProps } from './curd';

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
    | 'requestAdd'
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
    requestAdd,
    requestUpdateById,
    detailFormInstance,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [form] = ProForm.useForm(detailFormInstance);

  const handleFinish = useCallback(
    async (values) => {
      try {
        if (action === 'create' && requestAdd) {
          await requestAdd(values);

          message.open({
            type: 'success',
            content: '创建成功',
          });
        }
        if (action === 'update' && requestUpdateById) {
          await requestUpdateById({
            ...values,
            id,
          });

          message.open({
            type: 'success',
            content: '更新成功',
          });
        }

        // 刷新
        onSuccess?.();

        // 关闭弹窗
        return true;
      } catch (e) {
        // 由于 onFinish 吃掉了 error，所以这里自行抛出
        setTimeout(() => {
          throw e;
        }, 10);
      }
    },
    [action, requestAdd, requestUpdateById, onSuccess, id]
  );

  const handleOpenChange = useCallback(
    (open) => {
      if (!open) {
        // 关闭重置
        form?.resetFields();
        setIsOpen(open);
        return;
      }

      setIsOpen(open);
      if (id) {
        if (requestGetById) {
          return requestGetById({ id }).then((res) => {
            form?.setFieldsValue(res.data.data);
          });
        }
        if (requestGetByRecord) {
          return requestGetByRecord(record).then((res) => {
            form?.setFieldsValue(res.data.data);
          });
        }
      }
    },
    [form, id, requestGetById, requestGetByRecord, record]
  );

  const children = useMemo(() => {
    // 关闭的时候不需要 children
    if (!isOpen) {
      return null;
    }

    if (!detailForm) return null;
    return detailForm({ readonly: action === 'read' && !!id }, { action });
  }, [isOpen, detailForm, action, id]);

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
