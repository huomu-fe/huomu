import { Tooltip, Typography } from 'antd';
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

function FormJSON(props) {
  const { readonly, ...rest } = props;
  return (
    <ProForm.Item {...rest}>
      <Item readonly={readonly} />
    </ProForm.Item>
  );
}

function render(text) {
  let jsonText = text;

  if (!text) {
    return <div>-</div>;
  }

  try {
    jsonText = JSON.stringify(JSON.parse(text), null, 2);
  } catch (e) {
    console.error(e, text);
  }

  return (
    <Tooltip title={<pre>{jsonText}</pre>} placement="top">
      <Typography.Text className="block max-w-full overflow-hidden">{text}</Typography.Text>
    </Tooltip>
  );
}

function renderDetailFormItem(props: ProFormItemProps) {
  return <FormJSON {...props} />;
}

const jsonRender = {
  render,
  renderFormItem: () => <></>,
  renderDetailFormItem,
};

export { jsonRender };
