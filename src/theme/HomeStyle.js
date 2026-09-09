export const getStyles = (theme) => ({

  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.section}`,
    backgroundColor: theme.palette.primary.main,
    borderBottom: `${theme.border.width} ${theme.border.style} ${theme.palette.border.light}`,
    position: "sticky",
    top: "0",
    zIndex: 100,
  },

  logo: {
    fontWeight: theme.typography.logo.fontWeight,
    fontSize: theme.typography.logo.fontSize,
    color: theme.palette.text.white,
    fontFamily: theme.typography.fontFamily,
  },

  navLinks: {
    display: "flex",
    gap: theme.gap.nav,
    alignItems: "center",
  },

  navLink: {
    cursor: "pointer",
    color: theme.palette.text.white,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    fontWeight: theme.typography.nav.fontWeight,
    textDecoration: "none",
    fontSize: theme.typography.nav.fontSize,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    fontFamily: theme.typography.fontFamily,
  },

  signupBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.white,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    textDecoration: "none",
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    display: "inline-block",
    fontFamily: theme.typography.fontFamily,
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.hero} ${theme.spacing.section}`,
    gap: theme.gap.hero,
  },

  heroLeft: {
    flex: 1.2,
  },

  heroTitle: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    color: theme.palette.text.primary,
    lineHeight: theme.typography.h1.lineHeight,
    margin: `0 0 ${theme.spacing.lg} 0`,
    fontFamily: theme.typography.fontFamily,
  },

  heroPara: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.text.primary,
    lineHeight: theme.typography.body1.lineHeight,
    margin: `0 0 ${theme.spacing.xl} 0`,
    maxWidth: "520px",
    fontFamily: theme.typography.fontFamily,
  },

  heroBtns: {
    display: "flex",
    gap: theme.gap.medium,
    marginTop: theme.spacing.lg,
  },

  btnCyan: {
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    border: "none",
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    fontFamily: theme.typography.fontFamily,
  },

  btnOutline: {
    background: theme.palette.background.paper,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    cursor: "pointer",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    textDecoration: "none",
    display: "inline-block",
    fontFamily: theme.typography.fontFamily,
  },

  heroRight: {
    flex: 0.8,
    display: "flex",
    justifyContent: "center",
  },

  card: {
    position: "relative",
    background: theme.palette.background.paper,
    width: "400px",
    minHeight: "250px",
    border: "none",
    borderTop: `3px solid ${theme.palette.primary.main}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: `${theme.shape.cardRadius}px`,
    padding: theme.spacing.xxxl,
    boxSizing: "border-box",
    boxShadow: theme.shadow.card,
  },

  sliderContent: {
    width: "100%",
    textAlign: "center",
  },

  sliderHeading: {
    margin: `0 0 ${theme.spacing.md} 0`,
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    lineHeight: theme.typography.h3.lineHeight,
    fontFamily: theme.typography.fontFamily,
  },

  sliderParagraph: {
    margin: "0 auto",
    maxWidth: "320px",
    textAlign: "center",
    lineHeight: theme.typography.body1.lineHeight,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },

  arrowLeft: {
    position: "absolute",
    left: theme.spacing.sm,
    top: "50%",
    transform: "translateY(-50%)",
    width: "34px",
    height: "34px",
    borderRadius: `${theme.shape.borderRadius}px`,
    textAlign: "center",
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.border.light}`,
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    cursor: "pointer",
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
  },

  arrowRight: {
    position: "absolute",
    right: theme.spacing.sm,
    top: "50%",
    transform: "translateY(-50%)",
    width: "34px",
    height: "34px",
    borderRadius: `${theme.shape.borderRadius}px`,
    textAlign: "center",
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.border.light}`,
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    cursor: "pointer",
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
  },

  dots: {
    display: "flex",
    justifyContent: "center",
    gap: theme.gap.small,
    marginTop: theme.spacing.xxxl,
  },

  dot: {
    width: "10px",
    height: "6px",
    borderRadius: theme.shape.pillRadius,
    background: theme.palette.border.default,
    cursor: "pointer",
  },

  dotActive: {
    width: "10px",
    height: "6px",
    borderRadius: theme.shape.pillRadius,
    background: theme.palette.secondary.main,
  },

  about: {
    padding: `${theme.spacing.about} ${theme.spacing.section}`,
    textAlign: "center",
    marginTop: theme.spacing.aboutTop,
    backgroundColor: theme.palette.background.default,
  },

  aboutPara: {
    color: theme.palette.text.primary,
    maxWidth: "850px",
    margin: `${theme.spacing.md} auto ${theme.spacing.aboutBottom}`,
    lineHeight: theme.typography.body1.lineHeight,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    fontFamily: theme.typography.fontFamily,
  },

  aboutList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.gap.medium,
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  },

  aboutBox: {
    background: theme.palette.background.paper,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: `${theme.shape.boxRadius}px`,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },

  included: {
    padding: `${theme.spacing.section} ${theme.spacing.lg}`,
    textAlign: "center",
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },

  includeGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.gap.large,
    justifyContent: "center",
    marginTop: theme.spacing.gridTop,
    maxWidth: "1100px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  includeCard: {
    background: theme.palette.background.paper,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    padding: theme.spacing.card,
    borderRadius: `${theme.shape.largeRadius}px`,
    boxShadow: theme.shadow.card,
    width: "300px",
    flexGrow: 1,
    maxWidth: "350px",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    gap: theme.gap.small,
    textAlign: "left",
  },

  includeCardTitle: {
    margin: `0 0 ${theme.spacing.sm} 0`,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },

  includeCardText: {
    margin: 0,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: theme.palette.text.primary,
    lineHeight: theme.typography.body1.lineHeight,
    fontFamily: theme.typography.fontFamily,
  },

  footer: {
    background: theme.palette.primary.main,
    padding: theme.spacing.lg,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerRight: {
    display: "flex",
    gap: theme.gap.medium,
  },

  footerLeft: {
    color: theme.palette.text.white,
    fontSize: theme.typography.small.fontSize,
    fontWeight: theme.typography.small.fontWeight,
    fontFamily: theme.typography.fontFamily,
  },

  footBtn: {
    background: "transparent",
    color: theme.palette.text.white,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    textDecoration: "none",
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    cursor: "pointer",
    fontSize: theme.typography.small.fontSize,
    fontWeight: theme.typography.small.fontWeight,
    fontFamily: theme.typography.fontFamily,
  },

  footBtnSignup: {
    background: theme.palette.secondary.main,
    color: theme.palette.text.white,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.small.fontSize,
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily,
  },
});