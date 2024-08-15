import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { EditorJSON } from '../editor_json';

function Item(props) {
  return (
    <div style={{ height: '300px' }}>
      <EditorJSON {...props} />
    </div>
  );
}

function HMProFormJSON(props: ProFormItemProps) {
  const { readonly, fieldProps, ...rest } = props;
  return (
    <ProForm.Item {...rest}>
      <Item readonly={readonly} {...fieldProps} />
    </ProForm.Item>
  );
}

export { HMProFormJSON };
