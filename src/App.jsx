import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./Dash1";
import Jobs from "./Components/Jobs";
import Jobs2 from "./Components/Jobs2";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />}>
          <Route path="jobs" element={<Jobs />} />
          <Route path="job/:id" element={<Jobs2 />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
