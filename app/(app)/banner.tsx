import { Button } from "@/components/ui/button";
import { SearchIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative z-1 p-[120px,0,100px] overflow-hidden bg-[hsl(226,100%,calc(33%-33%*0.5))]">
      <div className="absolute bottom-0 right-0 -z-1">
        <Image src="/banner-shape.webp" alt="" width={475} height={630} />
      </div>
      <div className="container mx-auto px-3 w-full">
        <div className="flex flex-wrap items-start -mt-3 -mx-3">
          <div className="col-lg-6">
            <div>
              <h1 className="text-white text-5xl font-bold">
                Connecting Top Interpreter Talent with Global Opportunities—On{" "}
                <span className="text-highlight">Demand.</span>
              </h1>
            </div>
            <form id="dynamic-route">
              <div className="flex items-center gap-2.5 bg-white mt-7 w-full rounded-md">
                <input
                  type="search"
                  name="search"
                  className="rounded-md w-full outline-none bg-white text-black p-[11px,16px] leading-snug font-normal"
                  placeholder="Type job keyword"
                />

                <Button size={"icon"} className="rounded-l-none">
                  <SearchIcon className="hidden md:block" />
                  <small className="block md:hidden">Search</small>
                </Button>
              </div>
            </form>

            {/* Buyer wraper */}
          </div>
          <div className="col-lg-6 block sm:hidden">
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
