import "./App.css";
import NavBar from "./Components/NavBar";
import All from "./Components/All";
import Toggle from "./Components/Toggle";
import GeckoDetail from "./Components/GeckoDetail";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/gecko/:id" element={<GeckoDetail />} />
      </Routes>
      <Toggle />
      <Footer />
    </div>
  );
}

export default App;
