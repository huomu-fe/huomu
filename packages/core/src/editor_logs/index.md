---
group: 'core'
toc: content
---

# LogViewer 组件

`LogViewer` 是一个用于显示日志内容的 React 组件。它使用 CodeMirror 编辑器来呈现日志，提供了语法高亮和主题支持。

## 代码演示

### 常规

```tsx
import { LogsViewer } from '@huomu/core';

function Demo() {
  return (
    <LogsViewer
      logs={[
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'info',
          msg: 'This is an info log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'warn',
          msg: 'This is a warning log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'error',
          msg: 'This is an error log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'system',
          msg: 'This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message',
        },
      ]}
    />
  );
}

export default Demo;
```
