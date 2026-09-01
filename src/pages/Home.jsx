import React, { useState } from 'react';
import './Home.css';

const slides = [
  { title: "Complete Auth Flow", desc: "Beautiful dark/light mode with smooth transition,peristed across all pages and session." },
  { title: "Responsive Design", desc: "Works perfectly on Desktop,Tablet and Mobile devices." },
  { title: "HTML CSS Javascript", desc: "Built using only HTML,CSS AND Vanilla Javascript." }
];

function Home({ setPage }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">WebTech Practice</div>
        <div className="nav-links">
          <button>About</button>
          <button>Services</button>
          <button>Theme</button>
          <button onClick={()=>setPage("login")}>Login</button>
          <button className="signup-btn" onClick={()=>setPage("register")}>SignUp</button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <h1>Launch your Web Tech <br/>
             practice site in minutes</h1>
          <p>A clean modern starter template with Login, SignUp Dashboard, Profile and Logout pages using only HTML/CSS/ JS and browser localStorage Perfect for learning and practicing web development fundamentals.</p>
          <div className="hero-btns">
            <button className="btn-cyan" onClick={()=>setPage("register")}>Sign Up</button>
            <button className="btn-outline" onClick={()=>setPage("login")}>I already have an account</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="card">
            <button className="arrow left" onClick={()=>setIndex(index===0?2:index-1)}>&lt;</button>
            <h2>{slides[index].title.split(" ")[0]}<br/>{slides[index].title.split(" ").slice(1).join(" ")}</h2>
            <p>{slides[index].desc}</p>
            <button className="arrow right" onClick={()=>setIndex(index===2?0:index+1)}>&gt;</button>
            <div className="dots">
              {slides.map((_,i)=><div key={i} className={i===index?"dot active":"dot"}></div>)}
            </div>
          </div>
        </div>
      </div>

     
      <div className="about">
        <h1>About This Project</h1>
        <p className="about-para">This comprehensive template is designed for students and developers to practice modern web fundamentals-responsive layouts, accessible forms, client-side state management, and component architecture-without any frameworks or complex build process.</p>
        <div className="about-list">
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
          <div className="about-box">Single-file pages you can open directly in any modern browser</div>
        </div>
      </div>

      
      <div className="included">
        <h1>What's Included</h1>
        <div className="included-grid">
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
          <div className="include-card"><h3>Authentication Templates</h3><p>Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.</p></div>
        </div>
      </div>

      
      <footer className="footer">
        <div className="footer-left">© 2025 WebTech Practice. Built for learning and growth.</div>
        <div className="footer-right">
          <button className="foot-btn">About</button>
          <button className="foot-btn">Services</button>
          <button className="foot-btn">Theme</button>
          <button className="foot-btn">Login</button>
          <button className="foot-btn cyan">Sign Up</button>
        </div>
      </footer>
    </div>
  );
}
export default Home;