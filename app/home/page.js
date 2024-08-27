"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaTasks,
  FaUserPlus,
  FaProjectDiagram,
  FaRegQuestionCircle,
  FaClock,
  FaComments,
} from "react-icons/fa";

const HomePage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/board");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800">
      <main className="flex flex-col flex-1 p-8 md:px-16 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-8 leading-tight text-blue-600">
            Welcome to TaskForge
          </h1>
          <p className="text-xl mb-10 text-gray-700">
            Revolutionize your task management with TaskForge. Whether you’re an
            individual or part of a team, TaskForge provides the tools you need
            to organize, track, and complete your projects with efficiency and
            ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <FaTasks className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-3xl font-semibold mb-3">Organize Tasks</h3>
              <p className="text-base text-gray-600">
                Streamline your workflow by managing tasks efficiently.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <FaProjectDiagram className="text-6xl text-green-500 mb-4" />
              <h3 className="text-3xl font-semibold mb-3">Manage Projects</h3>
              <p className="text-base text-gray-600">
                Plan, execute, and track your projects with precision.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <FaUserPlus className="text-6xl text-orange-500 mb-4" />
              <h3 className="text-3xl font-semibold mb-3">Collaborate</h3>
              <p className="text-base text-gray-600">
                Work together with your team to achieve common goals.
              </p>
            </div>
          </div>

          <div className="mb-16 p-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-xl rounded-lg">
            <h2 className="text-4xl font-semibold mb-6">Why TaskForge?</h2>
            <p className="text-lg mb-6">
              <FaRegQuestionCircle className="inline text-white mr-2" />
              Discover the features that make TaskForge the ultimate tool for
              productivity:
            </p>
            <ul className="list-disc pl-8 text-left text-lg space-y-4">
              <li>
                <FaTasks className="inline text-white mr-2" />
                <strong>Task Management:</strong> Create, organize, and
                prioritize tasks with ease.
              </li>
              <li>
                <FaProjectDiagram className="inline text-white mr-2" />
                <strong>Project Tracking:</strong> Monitor your progress and
                meet deadlines effectively.
              </li>
              <li>
                <FaUserPlus className="inline text-white mr-2" />
                <strong>Team Collaboration:</strong> Share tasks and collaborate
                seamlessly in real-time.
              </li>
              <li>
                <FaClock className="inline text-white mr-2" />
                <strong>Time Tracking:</strong> Keep an accurate record of time
                spent on tasks and projects.
              </li>
              <li>
                <FaComments className="inline text-white mr-2" />
                <strong>Communication Tools:</strong> Leverage built-in chat and
                comments for efficient team communication.
              </li>
            </ul>
            <a
              href="/features"
              className="inline-block px-8 py-3 mt-6 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              Explore Features
            </a>
          </div>

          <div className="mb-12">
            <p className="text-xl mb-4 font-semibold">Ready to get started?</p>
            <button
              onClick={handleGetStarted}
              aria-label="Get Started with TaskForge"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-5xl mx-auto text-center">
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

export default HomePage;
