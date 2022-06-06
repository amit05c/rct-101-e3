import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={ <AuthProvider ><Home /></AuthProvider>
        } />
      
      </Routes>
        

      
    </div>
  );
}

export default App;
