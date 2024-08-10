import React from 'react';
import { ProFormDateRangePicker } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import { isString } from 'lodash-es';
import type { ProRenderFieldPropsType } from '@ant-design/pro-components';

function getDayjs(text: string | number) {
  if (isString(text) && /^\d+$/.test(text as string)) {
    return dayjs(parseInt(text as string));
  }
  // 其他都可以 dayjs
  return dayjs(text);
}

enum CustomValueTypeEnum {
  /** 渲染时间 + 搜索日期范围 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** 渲染日期 + 搜索日期范围 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
}

const renderMap = {
  dateTime: (text) => {
    if (!text) return <div>-</div>;

    return <div>{getDayjs(text).format('YYYY-MM-DD HH:mm:ss')}</div>;
  },
  date: (text) => {
    if (!text) return <div>-</div>;

    return <div>{getDayjs(text).format('YYYY-MM-DD')}</div>;
  },
};

const renderFormItemMap = {
  dateRange: (_, props) => {
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
};

const customValueTypeMap: Record<string, ProRenderFieldPropsType> = {
  [CustomValueTypeEnum.CustomDateTimeAndDateRange]: {
    render: renderMap.dateTime,
    renderFormItem: renderFormItemMap.dateRange,
  },
  [CustomValueTypeEnum.CustomDateAndDateRange]: {
    render: renderMap.date,
    renderFormItem: renderFormItemMap.dateRange,
  },
};

export { customValueTypeMap, CustomValueTypeEnum };
