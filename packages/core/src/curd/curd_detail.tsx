import { message } from 'antd';
import { DrawerForm } from '@ant-design/pro-components';
import { useCallback, useMemo, useRef } from 'react';
import type { ProFormInstance } from '@ant-design/pro-components';
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
    'requestGetById' | 'requestGetByRecord' | 'requestAdd' | 'requestUpdateById' | 'renderForm'
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
    renderForm,
    requestGetById,
    requestGetByRecord,
    requestAdd,
    requestUpdateById,
  } = props;
  const refForm = useRef<ProFormInstance>();

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
    [action, onSuccess, requestAdd, requestUpdateById, id],
  );

  const handleOpenChange = useCallback(
    (open) => {
      if (!open) {
        return;
      }

      // 重置
      refForm.current?.resetFields();

      if (id) {
        if (requestGetById) {
          return requestGetById({ id }).then((res) => {
            refForm.current?.setFieldsValue(res.data.data);
          });
        }
        if (requestGetByRecord) {
          return requestGetByRecord(record).then((res) => {
            refForm.current?.setFieldsValue(res.data.data);
          });
        }
      }
    },
    [requestGetById, requestGetByRecord, id, record],
  );

  const children = useMemo(() => {
    if (!renderForm) return null;
    return renderForm({ readonly: action === 'read' && !!id }, { action });
  }, [action, id, renderForm]);

  return (
    <DrawerForm
      key={id || Math.random()}
      formRef={refForm}
      trigger={trigger}
      autoFocusFirstInput
      onFinish={handleFinish}
      onOpenChange={handleOpenChange}
      layout="vertical"
      readonly={action === 'read' && !!id}
    >
      <div className="h-[20px]" />
      {children}
    </DrawerForm>
  );
}

export { CURDDetail };
