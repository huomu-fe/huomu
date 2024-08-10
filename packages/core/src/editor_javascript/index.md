---
group: 'core'
toc: content
---

# EditorJavascript

```tsx
import { useState } from 'react';
import { EditorJavascript } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
interface EditorJavascriptProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
```
