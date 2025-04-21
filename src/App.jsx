import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home_page";
import AuthPage from "./pages/auth/auth_page";
import ColorPage from "./pages/search/color_page";

import Navbar from "./components/NavBar/Navbar";
import UserButton from "./components/UserButton/UserButton";

import "./App.css";
import MeLikesPage from "./pages/me/likes_page";
import MeSavesPage from "./pages/me/saves_page";
import MeProfilePage from "./pages/me/profile_page";
import ApiLoader from "./components/ApiLoader/ApiLoad";

function App() {
  return (
    <div className="app">
      <ApiLoader />
      <BrowserRouter>
        <Navbar key={`nav-${window.location.pathname}`} />
        <UserButton key={`ub-${window.location.pathname}`} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/colors/:color" element={<ColorPage />} />
          <Route path="/me">
            <Route path="likes" element={<MeLikesPage />} />
            <Route path="saves" element={<MeSavesPage />} />
            <Route path="profile" element={<MeProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
