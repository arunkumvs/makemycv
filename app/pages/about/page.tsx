import React from "react";

export const metadata = {
  title: "About Us – makemycv.ai",
  description:
    "Learn about makemycv.ai – our mission, values, and team behind the free AI-powered resume builder.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-midnightblue">
          About makemycv.ai
        </h1>
        <p className="text-lg text-gray-700">
          At <strong>makemycv.ai</strong>, our mission is to empower job seekers
          with modern, professional resumes – effortlessly. We believe everyone
          deserves access to quality resume tools, regardless of their
          background or experience.
        </p>
        <p className="text-lg text-gray-700">
          We’re a passionate team of designers, developers, and career experts
          who created this platform to simplify resume building with AI, without
          the clutter, cost, or complexity.
        </p>
        <p className="text-lg text-gray-700">
          Our builder is free, privacy-friendly, and focused on one thing:
          helping you land your dream job.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
