


import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Choose the plan that's right for you and get the best from our Excel dashboard experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Free Plan</h3>
            <p className="text-gray-600 mb-6 text-center">Perfect for beginners and individual users</p>
            <div className="text-4xl font-bold text-gray-900 mb-4">₹0<span className="text-lg font-medium">/month</span></div>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>✔ Upload XLSX & CSV files</li>
              <li>✔ Generate Bar, Line, Pie, Scatter Charts</li>
              <li>✔ Download Chart as Image</li>
              <li>✖ No AI-based Chart Insights</li>
              <li>✖ Limited History Storage</li>
            </ul>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-xl transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-indigo-600 text-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform scale-105">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="mb-6 text-center">Advanced features for professionals and teams</p>
            <div className="text-4xl font-bold mb-4">₹499<span className="text-lg font-medium">/month</span></div>
            <ul className="space-y-3 mb-8">
              <li>✔ All Free Features</li>
              <li>✔ AI-Based Chart Analysis</li>
              <li>✔ Unlimited History Access</li>
              <li>✔ Chart Export with Customization</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-xl transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
