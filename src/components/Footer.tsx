import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121827] text-white pt-10 pb-5 font-sans">
      <div className="footer-content flex flex-wrap justify-between max-w-6xl mx-auto px-4 pb-5 border-b border-[#303d5e]">
        <div className="footer-section flex-1 min-w-48 mx-4 my-3">
          <h3 className="text-lg font-bold mb-4 text-blue-500">EventTix</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Your one-stop destination for all event tickets. Discover, book, and
            enjoy with ease.
          </p>
        </div>

        <div className="footer-section flex-1 min-w-48 mx-4 my-3">
          <h3 className="text-lg font-bold mb-4 text-blue-500">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section flex-1 min-w-48 mx-4 my-3">
          <h3 className="text-lg font-bold mb-4 text-blue-500">Categories</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Concerts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Sports
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Theater
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-sm">
                Conferences
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section flex-1 min-w-48 mx-4 my-3">
          <h3 className="text-lg font-bold mb-4 text-blue-500">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-2">
            Get updates on new events and exclusive offers.
          </p>
          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Your email"
              required
              className="py-2 px-3 rounded flex-1 text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center pt-5 text-sm text-gray-300">
        <p>© 2025 EventTix. All rights reserved.</p>
        <nav className="mt-3">
          <a href="#" className="text-gray-300 hover:text-blue-500 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500 mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-500 mx-2">
            Help Center
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
