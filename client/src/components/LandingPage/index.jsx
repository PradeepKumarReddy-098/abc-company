import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftHeroLines from "../../assets/left-background.svg";
import abstractHeroGraphics from "../../assets/background.svg";
import ProcessSection from "../Chrono";
import "./index.css";

const LandingPage = () => {
  const [heading, setHeading] = useState(
    "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
  );

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        const request = await fetch("https://brynk-labs-kcsn.onrender.com/api/active-heading");
        const response = await request.json();
        setHeading(response.heading);
      } catch (error) {
        console.error("Error fetching heading for landing page:", error);
      }
    };
    fetchHeading();
  }, []);

  const textHighlightes = (headingText) => {
    const highlightText = "Revenue Management, Marketing";
    if (headingText.includes(highlightText)) {
      const parts = headingText.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="hero-heading highlight-text">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return headingText;
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav-menu">
          <ul>
            <li> About</li>
            <li>Services</li>
            <li>
              <Link to="/cms" className="link">
                CMS Page
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="left-background-graphics">
          <img src={leftHeroLines} alt="left lines" className="graphic-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">{textHighlightes(heading)}</h1>
            <p className="hero-description">
              Powerful AI solutions that go beyond mere data sorting and
              exploration. Use our array of AI-enabled solutions that understand
              your business and recommend the optimal way forward.
            </p>
            <div className="hero-buttons">
              <button className="btn-get-started">Get started</button>
            </div>
          </div>
        </div>

        <div className="right-background-graphics">
          <img
            src={abstractHeroGraphics}
            alt="right-graphics"
            className="graphic-image"
          />
        </div>
      </section>
      <ProcessSection></ProcessSection>
    </div>
  );
};

export default LandingPage;
