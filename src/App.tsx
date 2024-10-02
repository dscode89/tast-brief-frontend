import "./App.css";
import { HeaderWithNavigation } from "./components/organisms/HeaderWithNavigation.tsx/HeaderWithNavigation";
import { mockNavLinks } from "./mock-data/mockNavLinks";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import { LandingPageTemplate } from "./components/templates/LandingPageTemplate";
import { createGlobalStyle } from "styled-components";
import { LoginFormTemplate } from "./components/templates/LoginFormTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderWithNavigation
        logoInfo={{ src: logo, width: 140 }}
        navLinks={mockNavLinks}
        linkColor="white"
        linkHoverColor="#ffd1dc"
        headerBgColor="#000000"
      />
      <Routes>
        <Route path="/" element={<LandingPageTemplate />}></Route>
        <Route path="/login" element={<LoginFormTemplate />}></Route>
        <Route path="/login/register" element={<LoginFormTemplate />}></Route>
      </Routes>
    </>
  );
}

export default App;
