---
group: 'core'
toc: content
---

# EditorMarkdown

```tsx
import { useState } from 'react';
import { EditorMarkdown } from '@huomu/core';

function Demo() {
  const [value] = useState(
    `# hello

world
`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorMarkdown value={value} />
    </div>
  );
}

export default Demo;
```

## API

```tsx | pure
interface EditorMarkdownProps {
  value: string;
}
```
