import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Splash from "./components/Splash";

import { getStyles } from "./theme/HomeStyle";
import { getStyles as getOverviewStyles } from "./theme/OverviewStyle"; // yaha s lagaya
import ThemeProvider, { theme } from "./theme/themeContext";

function App() {

  const styles = getStyles(theme);
  const overviewStyles = getOverviewStyles(theme); // yaha naam sahi kiya

  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home styles={styles} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Overview styles={overviewStyles} />} /> 
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;