import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Index from './Index'

function App() {
  const [count, setCount] = useState(0);
  const handleClick=()=>{
    setCount(count+1)
  }

  return (
    <>
      <h1>Class component example:</h1>
      <div>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Show/Hide Index</button>
        {count>5?<Index/>:<div>"Index Removed"</div>}
      </div>
    </>
  )
}

export default App
