import "./App.css";
import { HeaderWithNavigation } from "./components/organisms/HeaderWithNavigation.tsx/HeaderWithNavigation";
import { mockNavLinks } from "./mock-data/mockNavLinks";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderWithNavigation
            logoInfo={{ src: logo, width: 140 }}
            navLinks={mockNavLinks}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
