import Image from "next/image";

export const metadata = {
  title: "Download Your Resume – Free Resume Builder",
  description:
    "Download your resume in PDF format instantly. No sign-up required. 100% free and professional.",
};

const ResumeDownloadPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-4xl font-bold text-midnightblue">
            Download Your Resume Instantly
          </h1>
          <p className="text-lg text-gray-700">
            Get your professional resume in PDF format with a single click. Make
            sure to review and preview your resume before download.
          </p>
          <button className="mt-4 bg-electricblue text-white text-lg py-3 px-6 rounded-full hover:bg-blue">
            Download Resume – FREE
          </button>
          <Image
            src="/assets/banner/resume-banner.png"
            alt="Resume preview"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900">Need Help?</h2>
            <p className="text-sm text-gray-600 mt-2">
              You can customize your resume layout, fonts, and colors before
              downloading.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900">
              Tips for Better Resume
            </h2>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Highlight your achievements</li>
              <li>Use action verbs</li>
              <li>Keep it concise</li>
              <li>Tailor it to the job you're applying for</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownloadPage;
