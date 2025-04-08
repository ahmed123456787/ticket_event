// pages/LandingPage.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedEvent from "../components/FeaturedEvent";
import PopularCities from "../components/PopularCities";
import SubscriptionPlans from "../components/SubscriptionPlans";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedEvent />
      <PopularCities />
      <SubscriptionPlans />
      <WhyChoose />
      <Footer />
    </>
  );
};

export default LandingPage;
