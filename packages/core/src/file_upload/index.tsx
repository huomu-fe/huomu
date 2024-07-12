import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { RcFile } from 'antd/es/upload/interface';

function FileUpload({ value, onChange }: { value?: RcFile; onChange?: (value?: RcFile) => void }) {
  const beforeUpload = (file: RcFile) => {
    onChange?.(file);
    return false;
  };

  const onRemove = () => {
    onChange?.(undefined);
  };

  return (
    <>
      <Upload
        name="file"
        maxCount={1}
        showUploadList={true}
        fileList={value ? [value] : undefined}
        beforeUpload={beforeUpload}
        onRemove={onRemove}
      >
        <Button icon={<UploadOutlined />}>点击选择文件</Button>
      </Upload>
    </>
  );
}

export { FileUpload };
