import { PhoneIcon, SendHorizonal } from "lucide-react";
import Image from "next/image";

const SupportSection = () => {
  return (
    <div className="my-20 md:my-32">
      <div className="container mx-auto px-3">
        <div className="flex flex-col md:flex-row items-center relative gap-0 md:gap-20">
          <div className="w-full md:w-1/2">
            <h6 className="mb-4 font-semibold text-lg leading-tight text-[hsl(0,0%,13%)]">
              Trusted by 100,000+ Business
            </h6>
            <div className="flex justify-center flex-wrap overflow-hidden border rounded-lg">
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/shoplist.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/unisaico.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image
                    width={130}
                    height={30}
                    src="/techhunter.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/wexeat.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/braincell.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/ecomarket.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/analitycs.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <Image width={130} height={30} src="/growmeup.webp" alt="" />
                </div>
              </div>
              <div className="text-center overflow-hidden -mt-0.5 w-[33.33333%]">
                <div className="py-[30px] px-2.5 border -mt-px -ml-px">
                  <img src="/mkt-group.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 support-wrapper__right">
            <div className="max-w-[300px]">
              <h4 className="text-white font-semibold text-xl md:text-3xl">
                24/7 customer support
              </h4>
              <p className="font-semibold text-white flex items-center mb-3 gap-2 text-base mt-2.5">
                <span className="size-6 flex justify-center items-center text-sm rounded-full text-white bg-[hsl(226,100%,33%)]">
                  <PhoneIcon className="size-4"/>
                </span>
                Hot Line: +1(888) 982-0561
              </p>
              <p className="font-semibold text-white flex items-center mb-3 gap-2 text-base">
                <span className="size-6 flex justify-center items-center text-sm rounded-full text-white bg-[hsl(226,100%,33%)]">
                  <SendHorizonal className="size-4"/>
                </span>
                Email: support@defrilex.com
              </p>
            </div>
            <div className="absolute top-0 bottom-0 -z-1 hidden md:block
            ">
              <Image
                width={520}
                height={300}
                src="/support-shape.webp"
                alt=""
              />
            </div>
            <div className="absolute top-0 bottom-0 right-0 -z-1 max-w-[320px] md:max-w-[45%] hidden md:block support-wrapper__thumb">
              <Image
                width={234}
                height={229}
                src="/support-thump.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
