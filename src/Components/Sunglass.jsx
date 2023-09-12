import React from 'react'
import './Sunglass.css'
import Watch from './Watch/Watch'
import add, { multiplay, } from '../Utils/Calculate';
const Sunglass = () => {
    const first = 55;
    const second = 23;
    const sum = add(first, second)
    const multi = multiplay (first , second)
  return (
      <div>
          <Watch/>
    </div>
  )
}

export default Sunglass