import React from "react";
import "../styles/global.css";

const Hero: React.FC = () => {
  const exploreEvents = () => {
    window.location.href = "/events";
  };

  const viewCalendar = () => {
    alert("View Calendar button clicked!");
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/hero picture.png')" }}
    >
      <div className="hero-content">
        <h1 className="text-5xl font-bold mb-2">
          Get Tickets to Amazing <br />
          Events
        </h1>
        <p className="text-xl mb-5">
          Discover and book tickets to the most exciting concerts, sports, arts,
          <br />
          and entertainment events near you.
        </p>
        <div className="hero-buttons">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <button className="btn btn-dark" onClick={exploreEvents}>
              Explore Events
            </button>
            <button className="btn btn-light" onClick={viewCalendar}>
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
