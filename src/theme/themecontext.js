export const styles = {

  container: {
    fontFamily: "'Poppins', sans-serif",
    background: '#f7f7f7',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 60px',
    backgroundColor: '#164b8b',
    borderBottom: '1px solid #fff',
    position: 'sticky',
    top: '0',
    zIndex: '100',
  },

  logo: {
    fontWeight: '800',
    fontSize: '20px',
    color: '#fff',
    textDecoration: 'none',
  },

  navLinks: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  },

  navLink: {
    cursor: 'pointer',
    color: '#fff',
    border: '1px solid #4ECDC4',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '15px',
    padding: '8px 18px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    display: 'inline-block',
  },

  signupBtn: {
    backgroundColor: '#4ECDC4',
    color: 'white',
    padding: '8px 18px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block',
  },

  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 60px',
    gap: '40px',
    flex: '1',
  },

  heroLeft: { 
    flex: 1.2 
  },
  
  heroTitle:{
     fontSize: '42px',
     fontWeight: '800',
     color: '#333',
     lineHeight: '1.15',
     margin: '0 0 18px 0',
  },

  heroPara: {
     fontSize: '14px',
     color: 'black', 
     lineHeight: '1.7',
     margin: '0 0 28px 0',
     maxWidth: '520px',
  },

  heroBtns: {
     display: 'flex',
     gap: '14px',
     marginTop: '24px', 
  },

  btnCyan: {
    background: '#4ECDC4',
    color: 'white',
    border: 'none',
    padding: '12px 22px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  btnOutline: {
    background: 'white',
    border: '1px solid #4ECDC4', 
    padding: '12px 22px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#333', 
    textDecoration: 'none',
  },

  heroRight: {
     flex: 0.8, 
     display: 'flex', 
     justifyContent: 'center' 
  },
    
  card: {
    position: 'relative',
    background: '#fff',
    width: '400px',
    minHeight: '250px',
    border: 'none',
    borderTop: '3px solid #164b8b',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '28px',
    padding: '30px',
    boxSizing: 'border-box',
  },

  sliderContent: { 
    width: '100%', 
    textAlign: 'center' 
  },

  sliderHeading: {
     margin: '0 0 15px 0', 
     textAlign: 'center' 
    },

  sliderParagraph: {
     margin: '0 auto', 
     maxWidth: '320px', 
     textAlign: 'center', 
     lineHeight: '1.5' 
    },

  arrowLeft: {
    position: 'absolute', 
    left: '10px', 
    top: '50%',
    transform: 'translateY(-50%)', 
    width: '34px', 
    height: '34px',
    borderRadius: '8px', 
    border: '1px solid #fff', 
    background: '#4ECDC4', 
    cursor: 'pointer',
  },

  arrowRight: {
    position: 'absolute', 
    right: '10px', 
    top: '50%',
    transform: 'translateY(-50%)', 
    width: '34px', 
    height: '34px',
    borderRadius: '8px', 
    border: '1px solid #fff', 
    background: '#4ECDC4', 
    cursor: 'pointer',
  },

  dots: { 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '8px', 
    marginTop: '30px' 
  },

  dot: {
     width: '10px', 
     height: '6px', 
     borderRadius: '10px', 
     background: '#ddd', 
     cursor: 'pointer' 
    },

  dotActive: {
     width: '10px', 
     height: '6px', 
     borderRadius: '10px', 
     background: '#4ECDC4' 
    },

  about: {
     padding: '70px 60px', 
     textAlign: 'center', 
     marginTop: '100px',
    },

  aboutPara: { 
    color: '#333', 
    maxWidth: '850px', 
    margin: '16px auto 36px', 
    lineHeight: '1.7', 
    fontSize: '15px' 
  },

  aboutList: { 
    display: 'grid', 
    gridTemplateColumns: '1fr', 
    gap: '14px', 
    maxWidth: '700px', 
    margin: '0 auto', 
    textAlign: 'center' 
  },

  aboutBox: {
     background: '#fff', 
     border: '1px solid #4ECDC4', 
     padding: '14px 16px', 
     borderRadius: '10px', 
     fontSize: '14px', 
     color: '#333' },
  
  included: { 
    padding: '60px 20px', 
    textAlign: 'center', 
    width: '100%'
   },

  includeGrid: { 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '20px', 
    justifyContent: 'center', 
    marginTop: '36px', 
    maxWidth: '1100px', 
    marginLeft: 'auto', 
    marginRight: 'auto' 
  },

  includeCard: {
     background: 'white', 
     border: '1px solid #4ECDC4', 
     padding: '22px', 
     borderRadius: '12px', 
     width: '300px', 
     flexGrow: 1, 
     maxWidth: '350px', 
     minHeight: '120px', 
     display: 'flex', 
     flexDirection: 'column', 
     gap: '8px', 
     textAlign: 'left' 
    },

  includeCardTitle: {
     margin: '0 0 8px 0', 
     fontSize: '16px', 
     fontWeight: '700' 
    },

  includeCardText: {
     margin: 0, 
     fontSize: '14px', 
     color: '#333', 
     lineHeight: '1.4' 
    },

  footer: {
     background: '#164b8b', 
     padding: '20px 60px', 
     display: 'flex', 
     justifyContent: 'space-between', 
     alignItems: 'center', 
     width: '100%', 
     marginTop: 'auto' 
    },

  footerRight: {
     display: 'flex', 
     gap: '12px' 
    },

  footerLeft: {
     color: '#fff',
    fontSize: '14px' 
  },

  footBtn: {
     cursor: "pointer", 
     color: "#fff", 
     border: '1px solid #4ECDC4', 
     fontWeight: "600", 
     textDecoration: "none", 
     fontSize: "14px", 
     padding: "8px 18px", 
     borderRadius: "8px", 
     backgroundColor: "transparent", 
     display: "inline-block" 
    },
};