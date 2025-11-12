import Image from "next/image";

const WhyChooseSection = () => {
  return (
    <div className="my-14 md:my-28">
      <div className="container mx-auto w-full px-3">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-full px-3">
            <div className="text-center relative z-1 mb-14">
              <h2 className="font-semibold text-[hsl(0,0%,13%)] mb-3.5 text-4xl">
                The <span className="text-highlight">Defrilex</span>{" "}
                <span className="text-highlight">Advantage</span>
              </h2>
              <p className="text-[hsl(0,0%,51%)] max-w-[460px] mx-auto text-lg leading-tight">
                ...
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-diamond.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6">
                {" "}
                150,000+ Active Interpreters{" "}
              </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                The largest network of pre-qualified language professionals
              </p>
            </div>
          </div>
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-money.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6"> No upfront costs </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                Start for free—post your project or search for jobs with no
                subscriptions or hidden fees. You only pay when you hire the
                right fit for your needs
              </p>
            </div>
          </div>
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-suitcase.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6"> Ready-Now Workforce </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                No waiting, no recruiting—interpreters available 24/7
              </p>
            </div>
          </div>
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-verdict.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6"> Proven at Scale </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                Trusted by Fortune 500 companies for mission-critical
                communications
              </p>
            </div>
          </div>
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-star.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6">
                {" "}
                Instant Matching Technology{" "}
              </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                Connect with the right interpreter in seconds
              </p>
            </div>
          </div>
          <div className="p-[0px,30px,60px,0px] border border-t-0 border-l-0 border-black/1">
            <span className="max-w-[45px]">
              <Image
                height={45}
                width={45}
                src="/why-board.webp"
                className="choose us"
                alt=""
              />
            </span>
            <div className="mb-5">
              <h5 className="font-semibold mb-6"> Intelligent Compliance </h5>
              <p className="font-normal text-[hsl(0,0%,46%)]">
                Our platform provides secure, AI-powered hiring for regulated
                industries like healthcare and legal, automatically ensuring
                data protection and compliance with standards like HIPAA and
                GDPR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
