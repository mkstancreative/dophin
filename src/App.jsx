import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
