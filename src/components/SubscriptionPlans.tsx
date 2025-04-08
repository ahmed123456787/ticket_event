import React from "react";

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

const SubscriptionPlans: React.FC = () => {
  const plans: PlanProps[] = [
    {
      name: "Basic",
      price: "500 DA",
      features: ["Access to one event", "Standard seating", "Basic access"],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "2500 DA",
      features: [
        "Multiple event access",
        "Priority seating",
        "Meet & greet access",
        "Exclusive gifts",
      ],
      isPopular: true,
    },
    {
      name: "Ultimate",
      price: "4000 DA",
      features: [
        "Unlimited event access",
        "VIP seating guaranteed",
        "Backstage passes",
        "Dedicated concierge",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center">Subscription Plans</h1>
        <p className="text-gray-600 text-center mb-5">
          Get unlimited access to events with our subscription plans
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-5 rounded-lg shadow-md w-64 text-center relative ${
                plan.isPopular ? "border-2 border-black" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-3 rounded">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-2xl font-bold my-3">{plan.price}</p>
              <ul className="list-none p-0">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="my-1">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/subscription"
                className="inline-block bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
