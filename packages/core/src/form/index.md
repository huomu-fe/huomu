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

## HMProFormJavascript

JSON

```tsx
import { ProForm } from '@ant-design/pro-components';
import { HMProFormJavascript } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJavascript
        name="json"
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  );
}

export default Demo;
```

readonly

```tsx
import { ProForm } from '@ant-design/pro-components';
import { HMProFormJavascript } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJavascript
        name="json"
        readonly
        initialValue={`const name = 'world';
console.log('hello', name);
`}
      />
    </ProForm>
  );
}

export default Demo;
```
