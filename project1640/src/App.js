import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
function App() {
  return (
    <Router>
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Header>
    </Router>
  );
}

export default App;
