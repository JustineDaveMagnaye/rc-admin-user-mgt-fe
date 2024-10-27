import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AccountList from "./pages/AccountList"; 
import SecretPhrases from "./pages/SecretPhrases"; 
import NavBar from "./pages/NavBar"; // Import the NavBar

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to Login Page */}
        <Route path="/" element={<Login />} />

        {/* Route Wrapper for all /account related routes */}
        <Route path="/account/*" element={<AccountWrapper />} />

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const AccountWrapper = () => {
  return (
    <>
      {/* Render NavBar for all account-related pages */}
      <NavBar />
      <Routes>
        {/* Account-related pages */}
        <Route path="account-list" element={<AccountList />} />
        <Route path="secret-phrases" element={<SecretPhrases />} />
      </Routes>
    </>
  );
};

export default App;
