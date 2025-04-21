import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home_page";
import AuthPage from "./pages/auth/auth_page";

import Navbar from "./components/NavBar/Navbar";
import UserButton from "./components/UserButton/UserButton";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <UserButton />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
