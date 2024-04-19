import "./App.css";
import NavBar from "./Components/NavBar";
import All from "./Components/All";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<All />} />
      </Routes>
    </div>
  );
}

export default App;
