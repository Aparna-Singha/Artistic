import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/LayOut/Layout";
import HomePage from "./pages/home/home_page";
import AuthPage from "./pages/auth/auth_page";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
