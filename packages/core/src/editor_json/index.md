---
group: 'core'
toc: content
---

# EditorJSON

```tsx
import { useState } from 'react';
import { EditorJSON } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    `{
    "name": "world"
}
`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
```
