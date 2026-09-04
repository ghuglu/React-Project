import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from './HomeStyle.js';

const slides = [
  { title: "Complete Auth Flow", desc: "Beautiful dark/light mode with smooth transition, peristed across all pages and session." },
  { title: "Responsive Design", desc: "Works perfectly on Desktop, Tablet and Mobile devices." },
  { title: "HTML CSS Javascript", desc: "Built using only HTML, CSS AND Vanilla Javascript." }
];

function Home() {
  const [index, setIndex] = useState(0);
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div style={styles.container}>
     <nav style={styles.navbar}>
  <div style={styles.logo}>WebTech Practice</div>
  <div style={styles.navLinks}>
    <span onClick={()=>handleScroll('about')} style={styles.navLink}>About</span>
    <span onClick={()=>handleScroll('services')} style={styles.navLink}>Services</span>
    <Link to="/theme" style={styles.navLink}>Theme</Link>
    <Link to="/login" style={styles.navLink}>Login</Link>
    <Link to="/register" style={{...styles.signupBtn, textDecoration:'none'}}>SignUp</Link>
  </div>
</nav>

      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Launch your Web Tech <br/>practice site in minutes</h1>
          <p style={styles.heroPara}>A clean modern starter template with Login, SignUp Dashboard,Profile and< br/>
            Logout pages using only HTML/CSS/ JS and browser localStorage. Perfect< br/> 
            for learning and practicing web development fundamentals.</p>
          <div style={styles.heroBtns}>
            <Link to="/register" style={{...styles.btnCyan, textDecoration:'none', display:'inline-block'}}>Sign Up</Link>
            <Link to="/login" style={{...styles.btnOutline, textDecoration:'none', display:'inline-block'}}>I already have an account</Link>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={styles.card}>
            <button style={styles.arrowLeft} onClick={()=>setIndex(index===0?2:index-1)}>&lt;</button>
            <div style={{textAlign:'center', flex:1, padding:'0 10px'}}>
              <h2 style={{fontSize:'18px', color:'#0d2b4e', marginBottom:'8px'}}>{slides[index].title}</h2>
              <p style={{fontSize:'12px', color:'#6b7a8f'}}>{slides[index].desc}</p>
            </div>
            <button style={styles.arrowRight} onClick={()=>setIndex(index===2?0:index+1)}>&gt;</button>
                <div style={styles.dots}>
            {slides.map((_,i)=><div key={i} onClick={()=>setIndex(i)} style={i===index? styles.dotActive : styles.dot}></div>)}
          </div>
          </div>
        </div>
      </div>

      <div id='about' style={styles.about}>
        <h1 style={{textAlign:'center'}}>About This Project</h1>
        <p style={styles.aboutPara}>This comprehensive template is designed for students and developers to practice modern web fundamentals-responsive layouts, accessible forms, client-side state management, and component architecture-without any frameworks or complex build process.</p>
        <div style={styles.aboutList}>
          <div style={styles.aboutBox}>Single-file pages you can open directly in any modern browser</div>
          <div style={styles.aboutBox}>Clean semantic HTML with proper accessibility attributes</div>
          <div style={styles.aboutBox}>Modern CSS with Flexbox and Grid layouts</div>
          <div style={styles.aboutBox}>Vanilla JavaScript with localStorage for data persistence</div>
          <div style={styles.aboutBox}>Dark/Light theme toggle with smooth transitions</div>
          <div style={styles.aboutBox}>Fully responsive design for all screen sizes</div>
        </div>
      </div>

      <div id='services' style={styles.included}>
        <h1 style={{textAlign:'center'}}>What's Included</h1>
        <div style={styles.includedGrid}>
          <div style={styles.includeCard}>
            <h3>Authentication Templates</h3>
            <p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p>
            </div>
          <div style={styles.includeCard}>
            <h3>User Dashboard</h3>
            <p>Clean and intuitive dashboard layout with user stats, profile management and quick actions.</p>
            </div>
          <div style={styles.includeCard}>
            <h3>Profile Management</h3>
            <p>Editable profile page with avatar upload, personal info and account settings.</p>
            </div>
          <div style={styles.includeCard}>
            <h3>Theme Switcher</h3>
            <p>Dark and light mode with system preference detection and persistent storage.</p>
            </div>
          <div style={styles.includeCard}>
            <h3>Responsive Layout</h3>
            <p>Mobile-first approach ensures perfect display on Desktop, Tablet and Mobile devices.</p>
            </div>
          <div style={styles.includeCard}>
            <h3>Clean Code</h3>
            <p>Well-commented, beginner-friendly code built with only HTML, CSS and Vanilla JavaScript.</p>
            </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLeft}>© 2025 WebTech Practice. Built for learning and growth.</div>
        <div style={styles.footerRight}>
          <span onClick={()=>handleScroll('about')}  style={styles.footBtn}>About</span>
          <span onClick={()=>handleScroll('services')} style={styles.footBtn}>Services</span>
          <Link to="/theme" style={styles.footBtn}>Theme</Link>
          <Link to="/login" style={styles.footBtn}>Login</Link>
          <Link to="/register" style={{...styles.signupBtn, textDecoration:'none'}}>Sign Up</Link>
        </div>
      </footer>
    </div>
  );
}
export default Home;