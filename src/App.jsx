import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home_page";
import AuthPage from "./pages/auth/auth_page";

import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import UserButton from "./components/UserButton/UserButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
