import { useRef } from 'react'

const useSyncState = (initValue: any) => {
  const ref = useRef(null)
  ref.current = initValue

  function setValue(value: any) {
    ref.current = value
  }

  return [ref, setValue]
}

export default useSyncState
