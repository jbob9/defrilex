import {
  CalendarDays,
  ChevronsUpIcon,
  FolderClockIcon,
  HandCoinsIcon,
  Languages,
  ListChecks,
} from "lucide-react";

const HowWorkSection = () => {
  return (
    <div className="my-14 md:my-28">
      <div className="container mx-auto w-full px-3">
        <div className="flex flex-wrap justify-center mt-0 -mx-3">
          <div className="grow-0 shrink-0 w-[83.3333%] max-w-full mt-0 px-3">
            <div className="text-center mb-14 relative ">
              <h2 className="font-semibold text-[hsl(0,0%,13%)] mb-3.5 text-4xl">
                Leading brands trust our on-demand{" "}
                <span className="text-highlight">interpreter</span>{" "}
                <span className="text-highlight">marketplace.</span>
              </h2>
              <p className="text-[hsl(0,0%,51%)] mx-auto max-w-md text-lg leading-tight font-normal">
                {" "}
                Whether you need 5, 10, 20 or 100 professional interpreters,
                access the world&paos;s best talent instantly.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center -mt-3 -mx-3">
          <div className="col-lg-66 col-sm-6">
            <div className="relative z-1">
              <span className="size-20 flex justify-center rounded-full mx-auto my-0 bg-[hsl(226,100%,33%)]/1 text-[hsl(226,100%,33%)] group-hover:bg-[hsl(hsl(226,100%,33%))] group-hover:text-white">
                <HandCoinsIcon />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl">
                  {" "}
                  Global Pricing Flexibility{" "}
                </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  Access competitive rates from qualified interpreters worldwide{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-66 col-sm-6">
            <div className="how-work-item">
              <span className="size-20 flex justify-center rounded-full mx-auto my-0 bg-[hsl(226,100%,33%)]/1 text-[hsl(226,100%,33%)] group-hover:bg-[hsl(hsl(226,100%,33%))] group-hover:text-white">
                <ChevronsUpIcon />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl"> Rapid Deployment </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  Scale your interpretation services up or down within hours{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-66 col-sm-6">
            <div className="how-work-item">
              <span className="size-20 flex justify-center rounded-full mx-auto my-0 bg-[hsl(226,100%,33%)]/1 text-[hsl(226,100%,33%)] group-hover:bg-[hsl(hsl(226,100%,33%))] group-hover:text-white">
                <FolderClockIcon />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl"> 24/7 Availability </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  Connect with interpreters across all time zones, whenever you
                  need them{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-66 col-sm-6">
            <div className="how-work-item">
              <span className="how-work-item__icon">
                <ListChecks />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl">
                  {" "}
                  Complete Transparency{" "}
                </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  Full visibility and control over assignments, quality, and
                  costs{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-66 col-sm-6">
            <div className="how-work-item">
              <span className="how-work-item__icon">
                <Languages />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl">
                  {" "}
                  Any Language, Any Location{" "}
                </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  Source native speakers from 100+ countries{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-66 col-sm-6">
            <div className="how-work-item">
              <span className="how-work-item__icon">
                <CalendarDays />{" "}
              </span>
              <div className="text-center mb-6">
                <h5 className="font-semibold text-xl">
                  {" "}
                  Flexible Engagements{" "}
                </h5>
                <p className="text-[hsl(0,0%,46%) font-normal text-base m-0">
                  {" "}
                  From one-time calls to long-term projects, customize duration
                  to your needs{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorkSection;
