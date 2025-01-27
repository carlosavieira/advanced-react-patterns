// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import { Switch } from '../switch'


function callAll(...fns) {
  return (...args) => fns.forEach(fn => fn?.(...args))
}

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const getTogglerProps = ({ onClick, ...props }) => ({
    'aria-pressed': on,
    onClick: callAll(toggle, onClick),
    ...props,
  })


  return { on, toggle, getTogglerProps }
}

function App() {
  const { on, getTogglerProps } = useToggle()

  return (
    <div>
      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button
        aria-label="custom-button"
        {...getTogglerProps({ onClick: () => console.log('onButtonClick') })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
