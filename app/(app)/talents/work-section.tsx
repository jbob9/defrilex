import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WorkSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-[hsl(226,100%,calc(33%-33%*0.5))] z-2 relative rounded-md py-14 md:py-28 px-7 md:px-14">
          <div className="relative z-2 max-w-[490px]">
            <h5 className="text-white mb-2.5 font-semibold text-xl">
              Access Global Interpretation Talent{" "}
            </h5>
            <h2
              className="work-container__title"
            >
              Your Complete Interpretation{" "}
              <span className="text-highlight">Management</span>{" "}
              <span className="text-highlight">Platform</span>
            </h2>
            <p className="work-container__desc">
              {" "}
              The Defrilex Marketplace connects businesses of all sizes with
              certified, professional interpreters from around the world. Get
              on-demand language services with full visibility and
              control—available 24/7 in 200+ languages.{" "}
            </p>
            <ul className="list">
              <li className="list-item">
                {" "}
                Get on-demand language services with full visibility and
                control—available 24/7 in 200+ languages.{" "}
              </li>
            </ul>
            <a
              href="https://rh.defrilex.com/freelance-jobs"
              className={cn(buttonVariants(), 'h-12 rounded-sm')}
            >
              Find Your Work
            </a>
          </div>
          <div className="absolute bottom-0 z-1 max-w-lg right-[8%] hidden lg:block work-container__thumb">
            <Image
              width={510}
              height={780}
              src="/talent-about-main-2.webp"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="/talent-shape-4.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
