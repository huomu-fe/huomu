import React from 'react';
import { ProFormDateRangePicker } from '@ant-design/pro-components';
import dayjs from 'dayjs';

enum CustomValueTypeEnum {
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
}

const customValueTypeMap = {
  [CustomValueTypeEnum.CustomDateTimeAndDateRange]: {
    render: (text) => {
      return <div>{text ? dayjs(parseInt(text)).format('YYYY-MM-DD HH:mm:ss') : '-'}</div>;
    },
    renderFormItem: (_, props) => {
      return (
        <ProFormDateRangePicker
          {...props}
          fieldProps={{
            ...props.fieldProps,
            onChange: (value) => {
              const newValue = value
                ? [dayjs(value[0]).startOf('day'), dayjs(value[1]).endOf('day')]
                : value;

              props.fieldProps.onChange?.(newValue);
            },
          }}
        />
      );
    },
  },
};

export { customValueTypeMap, CustomValueTypeEnum };
