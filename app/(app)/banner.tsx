import { Button } from "@/components/ui/button";
import { SearchIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative z-1 pt-[120px] pb-[100px] px-0 overflow-hidden bg-[hsl(226,100%,calc(33%-33%*0.5))]">
      <div className="absolute bottom-0 right-0 -z-1">
        <Image
          src="/banner-shape.webp"
          alt=""
          width={475}
          height={630}
          className="w-full h-full"
        />
      </div>
      <div className="md:container md:mx-auto px-3 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start mx-3">
          <div className="">
            <div>
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Connecting Top Interpreter Talent with Global Opportunities—On{" "}
                <span className="text-highlight">Demand.</span>
              </h1>
            </div>
            <form id="dynamic-route">
              <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-0 mt-7 w-full rounded-md">
                <input
                  type="search"
                  name="search"
                  className="w-full outline-none bg-white text-black py-[13px] px-4 leading-snug font-normal"
                  placeholder="Type job keyword"
                />

                <Button
                  size={"icon"}
                  className="md:rounded-l-none w-full md:size-12"
                >
                  <SearchIcon className="hidden md:block" />
                  <small className="block md:hidden">Search</small>
                </Button>
              </div>
            </form>

            {/* Buyer wraper */}
          </div>
          <div className="hidden lg:block">
            <div className="relative z-1">
              <div className="max-w-[570px]">
                <Image
                  width={546}
                  height={464}
                  src="/banner-thumb.webp"
                  className="object-cover w-full h-full max-w-full"
                  alt=""
                />
              </div>
              <div>
                <div className="banner-thumb-wrapper__item one">
                  100% Remote
                </div>
                <div className="banner-thumb-wrapper__item two">
                  6700+ Jobs Available
                </div>
                <div className="banner-thumb-wrapper__item three">
                  <span className="inline-block">
                    <Image width={29} height={40} src="/heart.webp" alt="" />
                  </span>
                  <div className="leading-none">
                    <span className="text-sm"> Great Job</span>
                    <ul className="flex flex-wrap items-center gap-px">
                      <li className="">
                        {" "}
                        <StarIcon className="fill-yellow-500" />{" "}
                      </li>
                      <li className="fill-yellow-500">
                        {" "}
                        <StarIcon />{" "}
                      </li>
                      <li className="fill-yellow-500">
                        {" "}
                        <StarIcon />{" "}
                      </li>
                      <li className="fill-yellow-500">
                        {" "}
                        <StarIcon />{" "}
                      </li>
                      <li className="fill-yellow-500">
                        {" "}
                        <StarIcon />{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="banner-thumb-shape">
                <span className="banner-thumb-shape__one"></span>
                <span className="banner-thumb-shape__two"></span>
                <span className="banner-thumb-shape__three"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
