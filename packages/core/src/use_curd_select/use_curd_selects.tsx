import { useCURDSelect } from './use_curd_select';
import type { Params } from './use_curd_select';

// table detail 的数据不一样，所以需要两份
function useCURDSelects(params: Params) {
  const tableCURDSelect = useCURDSelect(params);
  const detailCURDSelect = useCURDSelect(params);

  return {
    tableCURDSelect,
    detailCURDSelect,
  };
}

export { useCURDSelects };
