import { ProForm } from '@ant-design/pro-components';
import { EditorJSON } from '../editor_json';

function Item(props) {
  return (
    <div style={{ height: '300px' }}>
      <EditorJSON {...props} />
    </div>
  );
}

function HMProFormJSON(props) {
  const { readonly, ...rest } = props;
  return (
    <ProForm.Item {...rest}>
      <Item readonly={readonly} />
    </ProForm.Item>
  );
}

export { HMProFormJSON };
