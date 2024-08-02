import { useMemo } from 'react';
import { useCURDSelect } from './use_curd_select';
import type { Params } from './use_curd_select';

// table detail 的数据不一样，所以需要两份
function useCURDSelects(getParams: ({ type }: { type: 'table' | 'detail' }) => Params) {
  const tableParams = useMemo(() => getParams({ type: 'table' }), [getParams]);

  const detailParams = useMemo(() => getParams({ type: 'detail' }), [getParams]);

  const tableCURDSelect = useCURDSelect(tableParams);
  const detailCURDSelect = useCURDSelect(detailParams);

  return {
    tableCURDSelect,
    detailCURDSelect,
  };
}

export { useCURDSelects };
