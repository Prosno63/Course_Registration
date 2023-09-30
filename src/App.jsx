import { useState } from 'react'

import './App.css'
import Courses from "./components/Courses/Courses";
import Navbar from './components/Courses/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Navbar></Navbar>

      <Courses></Courses>

    </>
  )
}

export default App
