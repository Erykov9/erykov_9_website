import "./App.scss";
import Navigation from "./pages/Navigation/Navigation";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-module">
        <Navigation/>
        <div className="app-wrapper">
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/projects" element={<Projects/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
