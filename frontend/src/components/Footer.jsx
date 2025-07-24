import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="md:mx-10 px-4">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-28 text-sm">
          {/* Left */}
          <div>
            {/* Optional Logo */}
            {/* <img className="mb-5 w-40" src={assets.logo} alt="Logo" /> */}
            <p className="w-full md:w-2/3 text-gray-600 leading-6">
              Built for seamless data analysis and insights.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li><a href="/" className="hover:text-indigo-600">Home</a></li>
              <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-indigo-600">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>+91 94444-65555</li>
              <li>excel_analysis@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Excel Insights — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
