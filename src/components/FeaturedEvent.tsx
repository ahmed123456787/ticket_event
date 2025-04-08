import React from "react";

const FeaturedEvent: React.FC = () => {
  return (
    <section className="featured-event py-12 px-5">
      <h2 className="text-3xl font-bold text-center mb-1">Featured Event</h2>
      <p className="text-gray-600 text-center mb-5">
        Don't miss our highlighted event of the month with exclusive offers.
      </p>

      <div className="event-card flex border border-gray-200 rounded-lg overflow-hidden max-w-2xl mx-auto bg-white shadow-md">
        <div className="event-image flex-1">
          <img
            src="/cto.png"
            alt="CTO Forum 2025"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="event-details flex-2 p-5">
          <span className="featured-tag bg-gray-100 px-2 py-1 rounded text-sm mr-2">
            FEATURED
          </span>
          <span className="limited-tickets text-gray-900 text-sm">
            Limited Tickets
          </span>
          <h3 className="text-xl font-bold mt-2 mb-1">
            CTO Forum Algeria 2025
          </h3>
          <p className="text-gray-800 leading-normal">
            Experience the most anticipated tech forum of the year with leading
            CTOs, groundbreaking innovations, and unparalleled networking
            opportunities.
          </p>
          <div className="event-info mt-4">
            <p className="flex items-center mb-1">
              <span className="mr-2">📅</span> 17 - 19 April 2025
            </p>
            <p className="flex items-center mb-1">
              <span className="mr-2">📍</span> Moufdi Zakaria Palace of Culture
            </p>
            <p className="flex items-center mb-1">
              <span className="mr-2">🎟️</span> From $3
            </p>
          </div>
          <div className="event-actions mt-5 flex">
            <a
              href="/subscription"
              className="get-tickets bg-[#10151a] text-white px-5 py-2 rounded mr-2 hover:bg-gray-800"
            >
              Get Tickets Now
            </a>
            <a
              href="#"
              className="learn-more border border-[#10151a] text-[#10151a] px-5 py-2 rounded hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
