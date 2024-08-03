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
    renderFormItem: (text, props) => {
      return <ProFormDateRangePicker {...props} />;
    },
  },
};

export { customValueTypeMap, CustomValueTypeEnum };
