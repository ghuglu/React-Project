
export const getStyles = (theme) => ({

  loginWrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.default,
    padding: theme.spacing.lg,
  },


  authCard: {
    background: theme.palette.background.paper,
    width: "100%",
    maxWidth: "400px",
    minHeight: "520px",
    padding: "50px 32px",
    borderRadius: theme.shape.largeRadius,
    borderTop: `4px solid ${theme.palette.secondary.main}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    boxSizing: "border-box",
  },


  loginTitle: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 800,
    margin: "0",
    color: theme.palette.text.primary,
  },


  loginSubtitle: {
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "15px",
    margin: "8px 0 28px",
  },


  inputGroup: {
    marginBottom: theme.spacing.lg,
  },


  inputLabel: {
    fontWeight: 600,
    fontSize: "15px",
    marginBottom: theme.spacing.sm,
    display: "block",
    color: theme.palette.text.primary,
  },


  inputField: {
    width: "100%",
    padding: "13px 16px",
    borderRadius: theme.shape.boxRadius,
    border: `1.5px solid ${theme.palette.secondary.main}`,
    background: theme.palette.background.paper,
    outline: "none",
    boxSizing: "border-box",
    fontSize: "14px",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    WebkitTextFillColor: theme.palette.text.primary,
  },


  inputHint: {
    fontSize: theme.typography.small.fontSize,
    color: theme.palette.text.primary,
    marginTop: "6px",
    display: "block",
  },



  loginOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "14px 0 22px",
  },


  rememberLabel: {
    fontSize: "12px",
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
  },


  forgot: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontSize: "12px",
  },


  primaryBtn: {
    width: "100%",
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    border: "none",
    padding: "13px",
    borderRadius: theme.shape.boxRadius,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    cursor: "pointer",
  },


  bottomText: {
    fontSize: "12px",
    textAlign: "left",
    marginTop: "18px",
    color: theme.palette.text.primary,
  },


  bottomLink: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    fontWeight: theme.typography.button.fontWeight,
  },

});


export default getStyles;
