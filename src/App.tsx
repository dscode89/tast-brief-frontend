import "./App.css";
import { HeaderWithNavigation } from "./components/organisms/HeaderWithNavigation.tsx/HeaderWithNavigation";
import { mockNavLinks } from "./mock-data/mockNavLinks";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import { LandingPageTemplate } from "./components/templates/LandingPageTemplate";

function App() {
  return (
    <>
      <HeaderWithNavigation
        logoInfo={{ src: logo, width: 140 }}
        navLinks={mockNavLinks}
      />
      <Routes>
        <Route path="/" element={<LandingPageTemplate />}></Route>
      </Routes>
    </>
  );
}

export default App;
