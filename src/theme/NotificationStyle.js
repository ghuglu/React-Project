export const getStyles = (theme) => ({
  content: {
    flex: 1,
    width: "100%",
    padding: theme.spacing.xl,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.default,
  },

  card: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: `${theme.border.width} ${theme.border.style} ${theme.palette.secondary.main}`,
    borderTop: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.border.radius.lg,
    minHeight: "75vh",
    padding: theme.spacing.xl,
    boxShadow: theme.shadow.card,
  },

  heading: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 600,
    color: theme.palette.text.primary,
    margin: 0,
    marginBottom: theme.spacing.lg,
  },

  text: {
    fontSize: theme.typography.small.fontSize,
    color: theme.palette.text.secondary,
    margin: 0,
    marginBottom: theme.spacing.lg,
  },

  prefHeader: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.xs,
    fontSize: theme.typography.body.fontSize,
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing.xs,
  },

  prefRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.gap.large,
    marginBottom: theme.spacing.xl,
  },

  prefBox: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.largeRadius,
    padding: theme.spacing.md,
    backgroundColor: theme.palette.background.paper,
  },

  boxTitle: { 
    fontSize: "14px", 
    fontWeight: 600, 
    color: theme.palette.text.primary, margin: "6px 0" 
  },

  boxDesc: {
     fontSize: "12px", 
     color: theme.palette.text.secondary, margin: 0 
    },

  icon: { 
    fontSize: "18px" 
  },

  checkRow: { 
    display: "flex", 
    alignItems: "center", 
    gap: "6px", 
    marginTop: "8px", 
    fontSize: "12px", 
    color: theme.palette.text.secondary 
  },

  recentHeader: {
     fontSize: "14px", 
     fontWeight: 600, 
     color: theme.palette.text.primary, marginBottom: theme.spacing.md },
  notificationItem: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.largeRadius,
    padding: theme.spacing.md,
    backgroundColor: theme.palette.background.paper,
  },

  activityTitle: {
     fontSize: "13px", 
     fontWeight: 600, 
     margin: 0, 
     color: theme.palette.text.primary },
  activityDesc: {
     fontSize: "12px", 
     color: theme.palette.text.secondary, 
     margin: "4px 0" 
    },
    
  activityTime: {
     fontSize: "11px", 
     color: theme.palette.text.secondary 
    },
});