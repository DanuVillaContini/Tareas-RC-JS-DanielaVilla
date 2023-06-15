
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./screen/Home"
import Formulario from "./screen/Formulario"
// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
