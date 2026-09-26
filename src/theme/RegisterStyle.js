
export const getStyles = (theme) => {

  return {

    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing.lg,
      fontFamily: theme.typography.fontFamily,
    },

    authCard: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      maxWidth: "460px",
      padding: "24px 26px",
      borderRadius: "16px",
      border: `1px solid ${theme.palette.border.default}`,
      borderTop: `4px solid ${theme.palette.secondary.main}`,
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      boxSizing: "border-box",
    },

    title: {
      fontSize: "26px",
      fontWeight: 700,
      color: theme.palette.text.primary,
      margin: "0 0 6px 0",
    },

    subtitle: {
      fontSize: "14px",
      color: theme.palette.text.primary,
      margin: "0 0 24px 0",
    },

    row: {
      display: "flex",
      gap: theme.gap.medium,
      width: "100%",
    },

    inputGroup: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minWidth: 0,
      marginBottom: theme.spacing.md,
    },

    fullGroup: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      marginBottom: theme.spacing.md,
    },

    inputLabel: {
      fontSize: "14px",
      fontWeight: 600,
      color: theme.palette.text.primary,
      marginBottom: "6px",
    },

    inputField: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: theme.shape.boxRadius,
      border: `1.5px solid ${theme.palette.border.default}`,
      backgroundColor: theme.palette.background.default,
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
      fontFamily: theme.typography.fontFamily,
      WebkitTextFillColor: theme.palette.text.primary,

    },

    inputHint: {
      fontSize: theme.typography.small.fontSize,
      color: theme.palette.text.primary,
      margin: "2px 0 12px 0",
    },

    terms: {
      display: "flex",
      alignItems: "center",
      gap: theme.gap.small,
      fontSize: "14px",
      color: theme.palette.text.primary,
      margin: "0 0 20px 0",
    },

    primaryBtn: {
      width: "100%",
      padding: "13px",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.white,
      border: "none",
      borderRadius: theme.shape.boxRadius,
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.button.fontWeight,
      cursor: "pointer",
    },

    bottomText: {
      fontSize: theme.typography.small.fontSize,
      color: theme.palette.text.primary,
      marginTop: theme.spacing.md,
    },

    bottomLink: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.button.fontWeight,
      textDecoration: "none",
    },

  };
};

export default getStyles;
