export const metadata = {
  title: "Privacy Policy – makemycv.ai",
  description:
    "Read how makemycv.ai collects, uses, and protects your personal data. We value your privacy and transparency.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-midnightblue">Privacy Policy</h1>
        <p className="text-gray-700 text-lg">
          At <strong>makemycv.ai</strong>, your privacy is important to us. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you use our website.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Personal Information:</strong> We may collect your name,
              email address, or resume data when you voluntarily submit it.
            </li>
            <li>
              <strong>Usage Data:</strong> We use cookies and analytics tools
              (such as Google Analytics) to understand how users interact with
              our site.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            2. How We Use Your Data
          </h2>
          <p className="text-gray-700">We use the collected data to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide and improve our resume-building services</li>
            <li>Send important service updates (only if opted-in)</li>
            <li>Ensure website security and performance</li>
            <li>Serve personalized ads through Google AdSense</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            3. Cookies and Tracking
          </h2>
          <p className="text-gray-700">
            We use cookies to enhance user experience and deliver relevant
            content and advertisements. By using our site, you consent to our
            use of cookies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700">
            We may use third-party services like Google Analytics and Google
            AdSense. These services may collect information via cookies to serve
            better ads and track website performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            5. Data Security
          </h2>
          <p className="text-gray-700">
            We implement standard security measures to protect your data, but no
            system is 100% secure. Please use our platform at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            6. Children’s Privacy
          </h2>
          <p className="text-gray-700">
            Our services are not intended for users under the age of 13. We do
            not knowingly collect data from children.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            7. Your Consent
          </h2>
          <p className="text-gray-700">
            By using makemycv.ai, you consent to this privacy policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy at any time. All changes will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-midnightblue">
            9. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please email us
            at:{" "}
            <a
              href="mailto:support@makemycv.ai"
              className="text-blue-600 underline"
            >
              support@makemycv.ai
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
