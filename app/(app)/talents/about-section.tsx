import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-full md:col-span-5 lg:pe-5">
            <div className="mb-7 md:mb-14">
              <h4 className="text-start font-semibold mb-3.5 text-[hsl(0,0%,13%)] text-xl md:text-2xl">
                How Does It Work?
              </h4>
            </div>
            <div className="about-wrapper">
              <div className="flex gap-6 mb-6 pb-6 border-b">
                <span className="size-6">
                  <Image
                    src="/talent-icon-1.webp"
                    width={25}
                    height={25}
                    alt=""
                  />
                </span>
                <div className="w-[calc(100%-25px)]">
                  <h5 className="font-semibold mb-4 text-lg md:text-xl">
                    Review Interpreter Profiles
                  </h5>
                  <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                    Browse verified interpreters with ratings, experience, and
                    sample work
                  </p>
                </div>
              </div>
              <div className="flex gap-6 mb-6 pb-6 border-b">
                <span className="size-6">
                  <Image
                    src="/talent-icon-2.webp"
                    width={25}
                    height={25}
                    alt=""
                  />
                </span>
                <div className="w-[calc(100%-25px)]">
                  <h5 className="font-semibold mb-4 text-lg md:text-xl">
                    Schedule &amp; Manage
                  </h5>
                  <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                    Book interpreters instantly or schedule in advance with our
                    automated system
                  </p>
                </div>
              </div>
              <div className="flex gap-6 mb-6 pb-6 border-b">
                <span className="size-6">
                  <Image
                    src="/talent-icon-3.webp"
                    width={25}
                    height={25}
                    alt=""
                  />
                </span>
                <div className="w-[calc(100%-25px)]">
                  <h5 className="font-semibold mb-4 text-lg md:text-xl">
                    Connect &amp; Collaborate
                  </h5>
                  <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                    Use our platform for video, phone, or on-site interpretation
                    services
                  </p>
                </div>
              </div>
              <div className="flex gap-6 mb-6 pb-6 border-b">
                <span className="size-6">
                  <Image
                    src="/talent-icon-4.webp"
                    width={25}
                    height={25}
                    alt=""
                  />
                </span>
                <div className="w-[calc(100%-25px)]">
                  <h5 className="font-semibold mb-4 text-lg md:text-xl">
                    One Invoice, Complete Transparency
                  </h5>
                  <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                    onsolidated billing with detailed reporting on all
                    interpretation services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-7 hidden md:block">
            <div className="flex items-center justify-center relative my-8">
              <div className="absolute top-0 right-0">
                <Image
                  width={155}
                  height={155}
                  src="/talent-shape-3.webp"
                  alt=""
                />
              </div>
              <div className="reletive z-1">
                <Image
                  width={270}
                  height={371}
                  src="/talent-about-main.webp"
                  alt=""
                />
                <div className="shape-one"></div>
                <div className="shape-two"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
