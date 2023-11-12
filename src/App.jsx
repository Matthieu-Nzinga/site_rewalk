import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projet" element={<Projets/>} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer/>
      <ScrollButton/>
    </BrowserRouter>
  )
}

export default App
