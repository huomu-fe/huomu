---
group: 'core'
toc: content
---

# Form

## HMProFormJSON

JSON

```tsx
import { ProForm } from '@ant-design/pro-components';
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  );
}

export default Demo;
```

readonly

```tsx
import { ProForm } from '@ant-design/pro-components';
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
        }}
      />
    </ProForm>
  );
}

export default Demo;
```
