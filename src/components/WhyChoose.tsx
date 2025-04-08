import React from "react";

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const WhyChoose: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: "/images/Screenshot 2025-03-08 173534.png",
      title: "Secure Transactions",
      description:
        "All purchases are protected with appropriate security and fraud prevention.",
    },
    {
      icon: "/images/Screenshot 2025-03-08 173202.png",
      title: "Verified Events",
      description:
        "Every event is carefully verified to ensure authenticity and quality.",
    },
    {
      icon: "/images/Screenshot 2025-03-08 173543.png",
      title: "Easy Planning",
      description:
        "Manage all your event tickets in one place with reminders and updates.",
    },
  ];

  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Why Choose EventTix</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-md text-left"
          >
            <img src={benefit.icon} alt="" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Why Built EventTix</h2>
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <p className="text-left mb-4">
            As event organizers ourselves, we faced challenges with slow
            platforms, expensive ticketing services, and complicated event
            management tools.
          </p>
          <p className="text-left">
            That's why we created EventTix — a smart, clean platform designed
            for all event organizers, from small gatherings to large-scale
            events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
