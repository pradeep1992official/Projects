import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
        </Routes>
    </div>
  )
}

export default App
