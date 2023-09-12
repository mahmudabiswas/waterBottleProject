import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'
import Header from './Components/Header'
import Bottles from './Components/Bottles'

function App() {
//   const watches = [
//     {
//     id:1, name:'apple watch', prize:200
//   },
//     {
//     id:2, name:'samsu', prize:300
//   },
//     {
//     id:3, name:'Mi watch', prize:400
//   },
  // ]
  
  // const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('Watch.json')
  //     .then(res => res.json)
  //   .then(data=>console.log(data))
  // },[])
  
  

  return (
    <>
{/*      
      <h1>Vite + React</h1>
      <Watch />
      {
        watches.map(watch=><Watch key={watch.id} watch={watch} />)
      } */}
      <Header />
      <Bottles/>
    </>
  )
}

export default App
