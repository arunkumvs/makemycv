export const metadata = {
  title: "Terms and Conditions – makemycv.ai",
  description:
    "Read the terms and conditions that govern your use of makemycv.ai. By accessing our site, you agree to these terms.",
};

const TermsPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-midnightblue">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 text-lg">
          By accessing and using <strong>makemycv.ai</strong>, you agree to the
          following terms and conditions. Please read them carefully.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Use of Website</h2>
          <p className="text-gray-700">
            This website is intended for users to create and download resumes
            for personal, non-commercial use. Misuse of the platform may result
            in restricted access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this website including templates, text, and branding
            are the intellectual property of makemycv.ai and cannot be copied
            without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Limitation of Liability</h2>
          <p className="text-gray-700">
            We are not responsible for any decisions made based on the resumes
            created using our platform. Always verify your data before use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Continued
            use of the site constitutes acceptance of those changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
