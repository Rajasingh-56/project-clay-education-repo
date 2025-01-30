import "./Styles/app.scss";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <Router basename="/project-clay-education-repo">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
