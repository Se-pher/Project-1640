// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header><Home /></Header>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
