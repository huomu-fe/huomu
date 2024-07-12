import type { DescriptionsProps } from 'antd';
import { Descriptions } from 'antd';
import { useMemo } from 'react';
import dayjs from 'dayjs';

// 不会，求勇士，先简单写
interface HMDescriptionsItem {
  valueType?: 'date' | 'dateTime' | 'time';
}

interface HMDescriptionsProps extends DescriptionsProps {
  hmItems?: (HMDescriptionsItem & Record<string, any>)[];
}

function HMDescriptions(props: HMDescriptionsProps) {
  const { hmItems, items, ...rest } = props;

  const newItems = useMemo(() => {
    if (hmItems) {
      return hmItems.map((item) => {
        let children = item.children;

        // 确保有值
        if (item.children !== null && item.children !== undefined) {
          // 如果是时间类型
          if (item.valueType === 'date') {
            children = dayjs(children).format('YYYY-MM-DD');
          } else if (item.valueType === 'dateTime') {
            children = dayjs(children).format('YYYY-MM-DD HH:mm:ss');
          } else if (item.valueType === 'time') {
            children = dayjs(children).format('HH:mm:ss');
          }
        }

        return {
          ...item,
          children: children || '-',
        };
      });
    }
    return items;
  }, [hmItems, items]);

  return <Descriptions items={newItems} {...rest} />;
}

export { HMDescriptions };
export type { HMDescriptionsProps };
