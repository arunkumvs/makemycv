export const metadata = {
  title: "Contact Us – makemycv.ai",
  description:
    "Reach out to makemycv.ai for questions, feedback, or support related to resume building.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-midnightblue">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          Got questions, feedback, or need support? We'd love to hear from you!
        </p>

        <div className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <p className="text-gray-700">
            📧 Email:{" "}
            <a
              href="mailto:support@makemycv.ai"
              className="text-blue-600 underline"
            >
              support@makemycv.ai
            </a>
          </p>
          <p className="text-gray-700">⏱️ Response Time: 24–48 hours</p>
          <p className="text-gray-700">
            📍 Location: Chennai, India (Remote Team)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
