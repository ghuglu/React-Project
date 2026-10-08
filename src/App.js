import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Splash from "./components/Splash";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import HelpSupport from "./pages/HelpSupport"; 

import { getStyles } from "./theme/HomeStyle";
import { getStyles as getOverviewStyles } from "./theme/OverviewStyle";
import { ThemeContext, ThemeProvider } from './theme/themecontext';

function AppContent() {
  const  theme  = useContext(ThemeContext);
  const styles = getStyles(theme);
  const OverviewStyles = getOverviewStyles(theme); 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home styles={styles} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Overview styles={OverviewStyles} />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/security" element={<Security />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/help" element={<HelpSupport />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;