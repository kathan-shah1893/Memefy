import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Edit from './pages/Edit'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS for global styles

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/edit" element={<Edit></Edit>}></Route>
    </Routes>
  )
}

export default App