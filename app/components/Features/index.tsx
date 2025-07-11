import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/features/time.svg",
    heading: "Easy Resume Builder",
    paragraph:
      "Drag, drop, type, done. Our builder guides you step by step to create a polished resume fast.",
  },
  {
    imgSrc: "/assets/features/signal.svg",
    heading: "ATS-Friendly Templates",
    paragraph:
      "Choose from 25+ recruiter-approved templates that pass Applicant Tracking Systems.",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Instant Download Options",
    paragraph:
      "Download your resume as PDF, DOCX, or share it online with a custom URL.",
  },
];

const Features = () => {
  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
          Powerful Features. Zero Hassle.
        </h3>
        <h5 className="text-black opacity-60 text-lg font-normal text-center">
          Everything you need to build the perfect resume – right at your
          fingertips.
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 featureShadow">
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              <h4 className="text-lg font-normal text-black opacity-50 my-2">
                {item.paragraph}
              </h4>
              <Link
                href={"/"}
                className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2"
              ></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
