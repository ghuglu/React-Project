import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Splash from "./components/Splash";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import HelpSupport from "./pages/HomeSupport";

import { getStyles } from "./theme/HomeStyle";
import { getStyles as getOverviewStyles } from "./theme/OverviewStyle"; 
import { getStyles as getOverviewStyles } from "./theme/OverviewStyle"; 
import ThemeProvider, { theme } from "./theme/themeContext";

function App() {

  const styles = getStyles(theme);
  const overviewStyles = getOverviewStyles(theme); 
  const overviewStyles = getOverviewStyles(theme); 


  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home styles={styles} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Overview styles={overviewStyles} />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/security" element={<Security />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/help" element={<HelpSupport />}
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;