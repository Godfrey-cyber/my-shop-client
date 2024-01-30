import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="h-screen w-full bg-red-100">
        <p className="text-gray-600 font-bold text-lg">Hello my shop</p>
      </div>
  )
}

export default App
