import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import PanelAdmin from "./pages/PanelAdmin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PanelAdmin />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
