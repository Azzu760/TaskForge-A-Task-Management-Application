"use client";
import React from "react";
import {
  FaTasks,
  FaProjectDiagram,
  FaUserPlus,
  FaClock,
  FaComments,
  FaCalendarCheck,
  FaFileInvoice,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <main className="flex flex-col flex-1 p-8 md:px-16 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight text-center">
            Explore TaskForge Features
          </h2>
          <p className="text-lg mb-8 text-center">
            Discover the key features that make TaskForge the perfect tool for
            managing your tasks and projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Task Management */}
            <div className="group bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaTasks className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Task Management</h3>
              <p className="text-sm">
                Create, organize, and prioritize tasks efficiently with our
                intuitive task management tools.
              </p>
            </div>

            {/* Project Tracking */}
            <div className="group bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaProjectDiagram className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Project Tracking</h3>
              <p className="text-sm">
                Monitor your project progress, set deadlines, and ensure
                everything stays on track.
              </p>
            </div>

            {/* Team Collaboration */}
            <div className="group bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaUserPlus className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">
                Team Collaboration
              </h3>
              <p className="text-sm">
                Collaborate with your team in real-time, share tasks, and work
                together seamlessly.
              </p>
            </div>

            {/* Time Tracking */}
            <div className="group bg-gradient-to-r from-gray-500 to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaClock className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Time Tracking</h3>
              <p className="text-sm">
                Keep track of the time spent on tasks and projects, helping you
                stay productive.
              </p>
            </div>

            {/* Communication Tools */}
            <div className="group bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaComments className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">
                Communication Tools
              </h3>
              <p className="text-sm">
                Use built-in chat and comment features to communicate with your
                team efficiently.
              </p>
            </div>

            {/* Calendar Integration */}
            <div className="group bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaCalendarCheck className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">
                Calendar Integration
              </h3>
              <p className="text-sm">
                Sync tasks and deadlines with your calendar to stay organized.
              </p>
            </div>

            {/* Invoicing */}
            <div className="group bg-gradient-to-r from-green-600 to-blue-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaFileInvoice className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Invoicing</h3>
              <p className="text-sm">
                Generate and manage invoices directly from your tasks and
                projects.
              </p>
            </div>

            {/* Analytics */}
            <div className="group bg-gradient-to-r from-red-500 to-yellow-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaChartLine className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Analytics</h3>
              <p className="text-sm">
                Analyze your productivity with detailed reports and analytics.
              </p>
            </div>

            {/* Security */}
            <div className="group bg-gradient-to-r from-purple-500 to-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-white">
              <FaShieldAlt className="text-5xl mb-4 group-hover:scale-105 transform transition-transform duration-300 ease-in-out" />
              <h3 className="text-2xl font-semibold mb-2">Security</h3>
              <p className="text-sm">
                Your data is protected with top-notch security features.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} TaskForge. All rights reserved.
          </p>
          <p className="text-sm">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;
