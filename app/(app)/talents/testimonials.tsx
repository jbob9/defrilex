import Image from "next/image";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center">
          <div className="">
            <div className="mb-6">
              <h2
                className="text-2xl md:text-4xl text-center"
              >
                Our Users <span className="text-highlight">Feedback</span>
              </h2>
              <p className="max-w-md mx-auto text-center">
                Hear what our users have to say about their experience with our
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="" style={{ width: "556px" }}>
            <div>
              <div className="h-full px-2.5 inline-block w-full">
                <div className="bg-white rounded-md h-full border relative py-10 px-[30px]">
                  <span className="leading-none text-[hsl(226,100%,33%)] mb-4" style={{ fontSize: '35px'}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 43 33"
                      fill="#0027a8"
                      className="size-10"
                    >
                      <path d="M0 0.612305V32.6123L16 16.6123V0.612305H0Z"></path>
                      <path d="M26.6666 0.612305V32.6123L42.6666 16.6123V0.612305H26.6666Z"></path>
                    </svg>
                  </span>
                  <p className="text-[hsl(0,0%,46%)] m-0 font-medium mb-7 text-xl">
                    The Defrilex Marketplace transformed how we handle
                    multilingual customer support. We scaled from 10 to 200
                    interpreters across 15 languages in just two weeks, reducing
                    our language service costs by 65% while improving response
                    times. The quality and reliability of interpreters has
                    exceeded our expectations.
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full size-16 overflow-hidden">
                      <Image
                        width={70}
                        height={70}
                        src="/talent-user.webp"
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="pl-5 w-[calc(100%-70px)]">
                      <h6 className="font-semibold mb-0 text-lg">Sarah Chen</h6>
                      <span className="text-sm">
                        {" "}
                        From VP of Global Operations | Fortune 500 Retailer{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
