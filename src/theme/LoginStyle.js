export const styles = {
  loginWrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fb",
    padding: "20px",
  },
  authCard: {
    background: "#fff",
    width: "100%",
    maxWidth: "400px",
    minHeight: "520px",
    padding: "50px 32px",
    borderRadius: "16px",
    borderTop: "4px solid #4ECDC4",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },
  loginTitle: { 
    textAlign: "center", 
    fontSize: "32px", 
    fontWeight: "800", 
    margin: "0", 
    color: "#333" 
  },
  loginSubtitle: { 
    textAlign: "center", 
    color: "#333", 
    fontSize: "15px", 
    margin: "8px 0 28px" 
  },
  inputGroup: {
     marginBottom: "20px" 
    },
  inputLabel: {
     fontWeight: "600", 
     fontSize: "15px", 
     marginBottom: "8px", 
     display: "block", 
     color: "#333" 
    },
  inputField: {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "10px",
    border: "1.5px solid #fff",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "14px",
  },
  inputHint: { 
    fontSize: "13px", 
    color: "#333", 
    marginTop: "6px", 
    display: "block" 
  },
  loginOptions: {
     display: "flex", 
     justifyContent: "space-between", 
     alignItems: "center", 
     margin: "14px 0 22px" 
    },
  rememberLabel: {
     fontSize: "12px", 
     color: "#333", 
     display: "flex", 
     alignItems: "center" 
    },
  forgot: { 
    color: "#4ECDC4", 
    textDecoration: "none", 
    fontSize: "12px" 
  },
  primaryBtn: {
    width: "100%",
    background: "#4ECDC4",
    color: "#fff",
    border: "none",
    padding: "13px",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
  },
  bottomText: {
     fontSize: "12px", 
     textAlign: "left", 
     marginTop: "18px", 
     color: "#333" 
    },
  bottomLink: {
     color: "#4ECDC4", 
     textDecoration: "none", 
     fontWeight: "600" 
    },
};
export default styles;