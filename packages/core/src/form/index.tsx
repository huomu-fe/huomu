import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { EditorJSON } from '../editor_json';
import { EditorJavascript } from '../editor_javascript';

function JSONItem(props) {
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
      <JSONItem readonly={readonly} {...fieldProps} />
    </ProForm.Item>
  );
}

function JavascriptItem(props) {
  return (
    <div style={{ height: '300px' }}>
      <EditorJavascript {...props} />
    </div>
  );
}

function HMProFormJavascript(props: ProFormItemProps) {
  const { readonly, fieldProps, ...rest } = props;
  return (
    <ProForm.Item {...rest}>
      <JavascriptItem readonly={readonly} {...fieldProps} />
    </ProForm.Item>
  );
}

export { HMProFormJSON, HMProFormJavascript };
