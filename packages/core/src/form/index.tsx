import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { EditorJSON } from '../editor_json';
import { EditorJavascript } from '../editor_javascript';
import { pinyinMatch } from '@huomu/tool';

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

/** ProFromSelect 搜索相关 props。 支持 1 搜索 2 拼音过滤 */
const proFormSelectSearchProps = {
  fieldProps: {
    showSearch: true,
    filterOption: (input, option) => pinyinMatch(option.label, input),
  },
};

export { HMProFormJSON, HMProFormJavascript, proFormSelectSearchProps };
