import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Submissions from "./pages/Submissions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </Router>
  );
}

export default App;
