import React from 'react'

const { useRef } = React

export default initValue => {
  const ref = useRef(null)
  ref.current = initValue

  function setValue(value) {
    ref.current = value
  }

  return [ref, setValue]
}
