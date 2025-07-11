export const metadata = {
  title: "Disclaimer – makemycv.ai",
  description:
    "Disclaimer: Learn about the limitations of liability and accuracy of content on makemycv.ai.",
};

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-midnightblue">Disclaimer</h1>

        <p className="text-gray-700 text-lg">
          All the information on this website – makemycv.ai – is published in
          good faith and for general information purpose only.
        </p>

        <p className="text-gray-700">
          While we strive to keep the resume templates and builder accurate and
          functional, we make no warranties about the completeness, reliability,
          or suitability of the output.
        </p>

        <p className="text-gray-700">
          Any action you take upon the information you find on this website is
          strictly at your own risk. makemycv.ai will not be liable for any
          losses or damages in connection with the use of our site.
        </p>

        <p className="text-gray-700">
          If you require any more information or have any questions about our
          site’s disclaimer, please feel free to contact us at{" "}
          <a
            href="mailto:support@makemycv.ai"
            className="text-blue-600 underline"
          >
            support@makemycv.ai
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DisclaimerPage;
