import React from "react";
import { Link } from "react-router-dom";

import SliderCard from "../components/slider.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { getStyles } from "../theme/HomeStyle.js";
import { theme } from "../theme/themecontext.js";

const navLinks = [
  { label: "About", id: "about", type: "scroll" },
  { label: "Services", id: "services", type: "scroll" },
  { label: "Theme", path: "/theme", type: "link" },
  { label: "Login", path: "/login", type: "link" },
  { label: "SignUp", path: "/register", type: "link", isButton: true },
];

const slides = [
  {
    title: "Complete Auth Flow",
    desc: "Beautiful dark/light mode with smooth transition.",
  },
  {
    title: "Responsive Design",
    desc: "Works perfectly on Desktop, Tablet and Mobile.",
  },
  {
    title: "HTML CSS Javascript",
    desc: "Built using only HTML, CSS AND Vanilla Javascript.",
  },
];

const aboutList = [
  "Single-file pages you can open directly in any modern browser",
  "Responsive design for Desktop, Tablet and Mobile",
  "Simple and clean user interface",
  "Client-side form validation",
  "LocalStorage based authentication",
  "Easy to understand for students",
];

const servicesList = [
  {
    title: "Authentication Templates",
    desc: "Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration.",
  },
  {
    title: "Responsive Design",
    desc: "The website works smoothly on desktop, tablet and mobile devices.",
  },
  {
    title: "Dashboard",
    desc: "A clean dashboard layout for managing user information and activities.",
  },
  {
    title: "Profile Management",
    desc: "Simple profile and account management pages for users.",
  },
  {
    title: "Form Validation",
    desc: "Client-side validation helps users enter correct information.",
  },
  {
    title: "LocalStorage",
    desc: "User information can be stored and managed using browser localStorage.",
  },
];

const AboutSection = ({ heading, description, data, styles }) => {
  return (
    <div id="about" style={styles.about}>
      <h1>{heading}</h1>

      <p style={styles.aboutPara}>
        {description}
      </p>

      <div style={styles.aboutList}>
        {data.map((item, i) => (
          <div key={i} style={styles.aboutBox}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = ({ heading, data, styles }) => {
  return (
    <div id="services" style={styles.included}>
      <h1>{heading}</h1>

      <div style={styles.includeGrid}>
        {data.map((item, i) => (
          <div key={i} style={styles.includeCard}>
            <h3 style={styles.includeCardTitle}>
              {item.title}
            </h3>

            <p style={styles.includeCardText}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function Home() {

  const styles = getStyles(theme);

  const handleScroll = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container}>

      <Navbar
        handleScroll={handleScroll}
        navItems={navLinks}
        styles={styles}
      />

      <div style={styles.hero}>

        <div style={styles.heroLeft}>

          <h1 style={styles.heroTitle}>
            Launch your Web Tech
            <br />
            practice site in minutes
          </h1>

          <p style={styles.heroPara}>
            A clean modern starter template with Login,
            SignUp, Dashboard, Profile and Logout pages
            using only HTML/CSS/JS and browser localStorage.
          </p>

          <div style={styles.heroBtns}>

            <Link
              to="/register"
              style={styles.btnCyan}
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              style={styles.btnOutline}
            >
              I already have an account
            </Link>

          </div>

        </div>

        <div style={styles.heroRight}>

          <SliderCard
            slides={slides}
          />

        </div>

      </div>

      <AboutSection
        heading="About This Project"
        description="This comprehensive template is designed for students and developers to practice modern web fundamentals-responsive layouts, accessible forms, client-side state management, and component architecture-without any frameworks."
        data={aboutList}
        styles={styles}
      />

      <ServicesSection
        heading="What's Included"
        data={servicesList}
        styles={styles}
      />

      <Footer
        handleScroll={handleScroll}
        styles={styles}
      />

    </div>
  );
}

export default Home;