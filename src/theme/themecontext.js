import React, { createContext } from "react";

export const theme = {
  palette: {
    primary: { main: "#164b8b" },
    secondary: { main: "#4ECDC4" },
    text: {
      primary: "#333",
      white: "#fff",
      secondary: "#6b7280",
    },
    background: {
      default: "#f8fafc",
      paper: "#fff",
    },
    border: {
      light: "#e5e7eb",
      default: "#d9dce6",
      main: "#d9dce6",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { fontSize: "42px", fontWeight: 800, lineHeight: 1.15 },
    h2: { fontSize: "24px", fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: "20px", fontWeight: 700, lineHeight: 1.3 },
    heading: { fontSize: "16px", fontWeight: 700 },
    body: { fontSize: "14px", fontWeight: 400, lineHeight: 1.7 },
    body1: { fontSize: "14px", fontWeight: 400, lineHeight: 1.7 },
    body2: { fontSize: "15px", fontWeight: 400, lineHeight: 1.7 },
    button: { fontSize: "14px", fontWeight: 600 },
    nav: { fontSize: "16px", fontWeight: 500 },
    logo: { fontSize: "20px", fontWeight: 800 },
    small: { fontSize: "13px", fontWeight: 400 },
  },
  spacing: {
    xs: "6px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "25px",
    xxxl: "30px",
    section: "60px",
    hero: "80px",
    about: "70px",
    aboutTop: "100px",
    aboutBottom: "36px",
    gridTop: "36px",
    card: "22px",
  },
  gap: {
    small: "8px",
    medium: "14px",
    large: "20px",
    nav: "25px",
    hero: "40px",
  },
  shape: {
    borderRadius: 8,
    cardRadius: 28,
    boxRadius: 10,
    largeRadius: 12,
    pillRadius: "10px",
  },
  border: {
    width: "1px",
    style: "solid",
    radius: {
      md: "8px",
      lg: "16px",
    },
  },
  shadow: {
    card: "0 4px 15px rgba(0,0,0,0.03)",
  },
};

export const ThemeContext = createContext(theme);

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;