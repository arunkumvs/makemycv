"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Industry {
  id: string;
  name: string;
  icon: string;
}

interface ResumeSample {
  id: string;
  title: string;
  image: string;
  industry_id: string;
}

const industries: Industry[] = [
  { id: "all", name: "Popular", icon: "⭐" },
  { id: "admin", name: "Administrative & Business Ops", icon: "🖥️" },
  { id: "engg", name: "Architecture & Engineering", icon: "🏗️" },
  { id: "finance", name: "Finance & Accounting", icon: "💰" },
  { id: "healthcare", name: "Healthcare", icon: "🩺" },
  { id: "legal", name: "Legal", icon: "⚖️" },
  { id: "production", name: "Manufacturing & Production", icon: "🏭" },
];

const resumeSamples: ResumeSample[] = [
  {
    id: "r1",
    title: "Software Engineer",
    image: "/assets/resumes/sample1.png",
    industry_id: "engg",
  },
  {
    id: "r2",
    title: "Front End Developer",
    image: "/assets/resumes/sample2.png",
    industry_id: "engg",
  },
  {
    id: "r3",
    title: "Accountant",
    image: "/assets/resumes/sample3.png",
    industry_id: "finance",
  },
  {
    id: "r4",
    title: "Java Developer",
    image: "/assets/resumes/sample4.png",
    industry_id: "engg",
  },
  {
    id: "r5",
    title: "Mechanical Engineer",
    image: "/assets/resumes/sample5.png",
    industry_id: "production",
  },
  {
    id: "r6",
    title: "Nurse Resume",
    image: "/assets/resumes/sample6.png",
    industry_id: "healthcare",
  },
];

const ResumeSamplePage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!hasMounted) return null;

  const selectedIndustryName =
    selectedIndustry === "all"
      ? "All Resumes"
      : industries.find((i) => i.id === selectedIndustry)?.name || "Resumes";

  const filtered = resumeSamples.filter((r) => {
    const matchesIndustry =
      selectedIndustry === "all" || r.industry_id === selectedIndustry;
    const matchesSearch = r.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="mb-8 space-y-4">
        <nav className="text-sm text-gray-500 space-x-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Resume Samples</span>
        </nav>

        {/* Mobile: Filter + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:hidden">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="w-full sm:w-1/2 border rounded-md px-3 py-2 text-sm shadow-sm"
          >
            {industries.map((ind) => (
              <option key={ind.id} value={ind.id}>
                {ind.icon} {ind.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search job titles"
            className="w-full sm:w-1/2 border rounded-md px-3 py-2 text-sm shadow-sm"
          />
        </div>

        {/* Desktop: Search Only */}
        <div className="hidden lg:flex justify-end">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search resume samples"
            className="w-64 border rounded-md px-4 py-2 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <h2 className="text-xl font-semibold mb-4">Industries</h2>
          <ul className="space-y-2">
            {industries.map((industry) => (
              <li
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center gap-2 p-2 text-sm cursor-pointer rounded
                ${
                  selectedIndustry === industry.id
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="text-lg">{industry.icon}</span>
                {industry.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Resume Grid */}
        <main className="lg:col-span-9">
          <h2 className="text-xl font-semibold mb-4">{selectedIndustryName}</h2>

          {filtered.length === 0 ? (
            <p className="text-gray-500">No resumes found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((resume) => (
                <div
                  key={resume.id}
                  className="border rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <Image
                    src={resume.image}
                    alt={resume.title}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded"
                  />
                  <h3 className="text-md mt-3 text-center font-medium text-gray-800">
                    {resume.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ResumeSamplePage;
