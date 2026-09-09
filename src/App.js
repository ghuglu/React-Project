import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Splash from "./components/Splash";

import { getStyles } from "./theme/HomeStyle";
import ThemeProvider, { theme } from "./theme/themecontext";


function App() {

  const styles = getStyles(theme);

  return (
    <ThemeProvider>
      <Router>

          <Routes>

            <Route path="/" element={<Splash />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>


      </Router>
    </ThemeProvider>
  );
}

export default App;