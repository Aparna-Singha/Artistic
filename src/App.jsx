import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/LayOut/Layout";
import HomePage from "./pages/home/home_page";
import AuthPage from "./pages/auth/auth_page";

import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import BottomButton from "./components/BottomButton/BottomButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BottomButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
