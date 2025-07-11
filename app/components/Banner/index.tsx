import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-header">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 flex flex-col justify-evenly relative">
            <Image
              src="/assets/banner/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px]"
            />
            <Image
              src="/assets/banner/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px]"
            />
            <h1 className="text-midnightblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5">
              Build Job‑Winning Resumes in Minutes.
            </h1>
            <h3 className="text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8">
              Create modern, professional resumes tailored to your career goals
              with our easy-to-use builder. No design skills needed.
            </h3>
            <div className="pt-8 mx-auto lg:mx-0">
              <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                Get Started – It's Free
              </button>
            </div>
          </div>

          <div className="col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0">
            <Image
              src="/assets/banner/resume-banner.png"
              alt="nothing"
              style={{ height: "fit-content", width: "100%" }}
              width={1000}
              height={505}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
