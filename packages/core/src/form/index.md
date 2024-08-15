---
group: 'core'
toc: content
---

# Form

## HMProFormJSON

JSON

```tsx
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return <HMProFormJSON name={JSON.stringify({ name: 'world' }, null, 2)} />;
}

export default Demo;
```
