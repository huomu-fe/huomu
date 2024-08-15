---
group: 'core'
toc: content
---

# valueTypeMap

自定义 valueType

## customValueTypeMap

```tsx | pure
import { customValueTypeMap } from '@huomu/core';
import { ProConfigProvider } from '@ant-design/pro-components';

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <div>some</div>
  </ProConfigProvider>
);

export default Demo;
```

## CustomValueTypeEnum

```tsx | pure
enum CustomValueTypeEnum {
  /** 渲染时间 + 搜索日期范围 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** 渲染日期 + 搜索日期范围 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
}
```

```tsx
import { CURD, customValueTypeMap, CustomValueTypeEnum } from '@huomu/core';
import { ProConfigProvider } from '@ant-design/pro-components';
import { range } from 'lodash-es';
import dayjs from 'dayjs';

async function fakeHMRequest() {
  const data = range(5).map((item) => ({
    id: `${item}`,
    timeStr: `2024-10-01 10:00:00`,
    timeNumber: +dayjs('2024-10-01 10:00:00'),
    dateStr: `2024-10-01`,
    dateNumber: +dayjs('2024-10-01'),
    jsonText: JSON.stringify({ name: 'hello world hello world hello world' }),
  }));

  return Promise.resolve({
    data: {
      data,
      success: true,
      totalSize: 100,
    },
  }) as Promise<any>;
}

const Table = () => {
  const hmColumns: any[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '时间 str',
      dataIndex: 'timeStr',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '时间 number',
      dataIndex: 'timeNumber',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '日期 str',
      dataIndex: 'dateStr',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '日期 number',
      dataIndex: 'dateNumber',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: 'json',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSON,
    },
  ];

  return (
    <CURD
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <Table />
  </ProConfigProvider>
);

export default Demo;
```
