import { useState } from 'react'
import Signup from './pages/Signup'
import Signup1 from './pages/Signup1'

import './App.css'
import Otp from './pages/Otp'
import Verify from './components/Verify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >

    {/* <Signup />*/ } 
      <Signup1/>
     {/* <Otp/>*/}
   {/* <Verify/>*/ }
      
    </div>
    </>
  )
}

export default App
