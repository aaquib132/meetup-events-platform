
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Home search={search} />
    </>
  )
}

export default App
