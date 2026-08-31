import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");


    if (page === "login") {
      return <Login setPage={setPage} />;
    }

    if (page === "register") {
      return <Register setPage={setPage} />;
    }

    if (page === "dashboard") {
      return <Dashboard setPage={setPage} />;
    }

    return <Home setPage={setPage} />;
  };

export default App;