export const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#164b8b',
    color: 'white',
    padding: '16px 60px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { 
  fontSize: '20px', 
  fontWeight: '800', 
  letterSpacing: '0.3px' 
},

navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    backgroundColor: 'transparent',
    background: 'transparent',
    color: '#fff',
    border: '1px solid #4ECDC4',
    padding: '8px 18px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
  },
  signupBtn: {
    background: '#4ECDC4',
    color: '#fff',
    border: '1px solid #4ECDC4',
    padding: '8px 18px',
    borderRadius: '20px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 60px',
    gap: '40px',
  },

  heroLeft: { 
    flex: 1.2 
  },
  
  heroTitle:{
     fontSize: '42px',
     fontWeight: '800',
     color: '#164b8b',
     lineHeight: '1.15',
     margin: '0 0 18px 0',
  },

  heroPara: {
     fontSize: '14px',
     color: '#333',
     lineHeight: '1.7',
     margin: '0 0 28px 0',
     maxWidth: '520px',
  },

  heroBtns: {
     display: 'flex',
      gap: '14px',
      marginTop: '24px' 
    },

  btnCyan: {
    background: '#4ECDC4',
    color: 'white',
    border: 'none',
    padding: '12px 22px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  btnOutline: {
    background: 'white',
    border: '1px solid #d0d5e0',
    padding: '12px 22px',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#333',
  },

  heroRight: {
     flex: 0.8, 
     display: 'flex', 
     justifyContent: 'center' 
    },
    
 card: {
    position: 'relative',
    background: '#fff',
    width: '380px',
    minHeight: '220px',
    border: 'none',
    borderTop: '3px solid #164b8b',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderRadius: '28px',
    padding: '10px',
  },
  arrowLeft: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '34px',
    height: '34px',
    borderRadius: '8px',
    textAlign: 'center',
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
    marginTop: '-12px',
  },

 dot: {
  width: '10px',
  height: '6px',
  borderRadius: '10px',
  background: '#d9dce6',
  cursor: 'pointer',
},

dotActive: {
  width: '10px',
  height: '6px',
  borderRadius: '10px',
  background: '#1ac6e8',
},

  about: {
    padding: '70px 60px',
    textAlign: 'center',
  },
  aboutPara: {
    color: '#333',
    maxWidth: '850px',
    margin: '16px auto 36px',
    lineHeight: '1.7',
    fontSize: '15px',
  },
  aboutList: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '14px',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
  },
  aboutBox: {
    background: '#fff',
    border: '1px solid #4ECDC4',
    padding: '14px 16px',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#333',
  },

  included: {
    padding: '40px 60px',
    textAlign: 'center',
    marginTop: '-20px',
  },
  includedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '36px',
    textAlign: 'left',
    alignItems: 'stretch',
  },
  includeCard: {
    background: 'white',
    border: '1px solid #4ECDC4',
    padding: '22px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    minHeight: '120px',
  },

  includeCardTitle: {
    margin: "0 0 8px 0",
    textAlign: "left",
  },

  includeCardText: {
    margin: 0,
    textAlign: "left",
    lineHeight: "1.4",
  },

 footer: {
    background: '#164b8b',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerRight: {
    display: 'flex',
    gap: '12px',
  },
  footerLeft: {
    color: '#fff',
  },

  footBtn: {
    background: 'transparent',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #4ECDC4',
    textDecoration: 'none',
    padding: '6px 14px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
  },
}