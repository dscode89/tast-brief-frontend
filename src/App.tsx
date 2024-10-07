import "./App.css";
import { HeaderWithNavigation } from "./components/organisms/HeaderWithNavigation.tsx/HeaderWithNavigation";
import { mockNavLinks } from "./mock-data/mockNavLinks";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import { LandingPageTemplate } from "./components/templates/LandingPageTemplate";
import { createGlobalStyle } from "styled-components";
import { FormTemplate } from "./components/templates/LoginFormTemplate";
import { LoginForm } from "./components/molecules/Forms/LoginForm";
import { RegistrationForm } from "./components/molecules/Forms/RegistrationForm";
import { CompanyRegistrationForm } from "./components/molecules/Forms/CompanyRegistrationForm";

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
        <Route
          path="/login"
          element={
            <FormTemplate>
              <LoginForm />
            </FormTemplate>
          }
        />
        <Route
          path="/login/register/general"
          element={
            <FormTemplate>
              <RegistrationForm />
            </FormTemplate>
          }
        />
        <Route
          path="/login/register/company"
          element={
            <FormTemplate>
              <CompanyRegistrationForm />
            </FormTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
