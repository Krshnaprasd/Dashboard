import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dash from "./Dash1";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
