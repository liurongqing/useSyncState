# 使用

```javascript
import useSyncState from 'use-sync-state'
const [status, setStatus] = useSyncState(1)
status.current // 1
setStatus(2)
status.current // 2
```