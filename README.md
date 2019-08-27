# 使用

## 同步 state 模式

```javascript
import useSyncState from 'use-sync-state'
export default () => {
  const [status, setStatus] = useSyncState(1)
  status.current // 1
  setStatus(2)
  status.current // 2
}
```

## 异步 state 模式

```javascript
import React from 'react'
const { useState } = React
export default () => {
  const [status, setStatus] = useState(1)
  status // 1
  setStatus(2)
  status // 1
}
```
