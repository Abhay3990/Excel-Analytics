// src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Excel Insights</h2>
          <p className="text-lg text-gray-600">
            Excel Insights is a powerful tool designed to make spreadsheet data more meaningful
            through charts, analysis, and easy-to-use dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://img.freepik.com/free-vector/data-analytics-concept-illustration_114360-4225.jpg"
              alt="Data Analysis Illustration"
              className="rounded-2xl shadow-md"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              We aim to simplify the way users interact with data by turning raw Excel or CSV files
              into beautiful, insightful visualizations. Whether you're a student, analyst, or business
              professional — our goal is to make data analysis accessible to everyone.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Upload Excel and CSV files with ease</li>
              <li>Generate customizable charts</li>
              <li>Get AI-driven insights (Premium)</li>
              <li>Save and manage your chart history</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">Why Choose Us?</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Unlike traditional spreadsheet tools, Excel Insights focuses on **simplicity**, **speed**,
            and **AI assistance** — making data analysis smarter and faster for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
