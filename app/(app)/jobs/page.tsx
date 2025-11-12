import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import FilterSection from "./filter-section";

const Jobs = () => {
  return (
    <div>
      <CustomBreadcrumb
        title="Freelance"
        links={[
          { title: "Home", path: "/" },
          { title: "Freelance job", path: "/jobs" },
        ]}
      />
      <div className="mb-20 md:mb-32 mt-7 md:mt-14">
        <div className="container mx-auto px-3">
          <div className="flex gap-5 items-start">
            <FilterSection />
            <div className="w-full md:w-[calc(100%-320px)]">
              <div className="block md:hidden">
                <span className="job-category-body__bar-icon">
                  <i className="las la-list"></i>
                </span>
              </div>
              <div className="flex items-start justify-between rounded-xl gap-7">
                <div className="rounded-md overflow-hidden mt-0 relative shadow-none w-full flex items-center gap-2.5 bg-white">
                  <input
                    className="pl-10 border border-black/1 rounded-md w-full outline-none bg-white text-black leading-tight p-[11px,16px]"
                    name="search"
                    type="search"
                    value=""
                    placeholder="Type job keyword"
                    autoComplete="off"
                  />
                  <span className="absolute left-3.5 top-1/2 h-full -translate-y-1/2 cursor-pointer items-center justify-center text-[hsl(0,0%,13%)]">
                    <SearchIcon />{" "}
                  </span>
                </div>
              </div>
              <div className="bg-white mt-6 border border-black/1 rounded-lg overflow-hidden">
                <div className="bg-white text-center py-12 rounded-xl">
                  <Image
                    width={128}
                    height={128}
                    src="/empty.webp"
                    alt="empty"
                  />
                  <p className="text-muted mt-3">No job found!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
