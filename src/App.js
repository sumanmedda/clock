import React, { useState } from 'react'
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime,setTime] = useState(time);
  
  const newTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time)
  }

  setInterval(newTime,1000)

  return <div class="main">
    <h1>Current time : {ctime}</h1>
    <h1>Current date : {date}</h1>
  </div>
}

export default App