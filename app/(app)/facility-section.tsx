import { CheckCircle } from "lucide-react";
import Image from "next/image";

const FacilitySection = () => {
  return (
    <div className="my-14 md:my-28">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="col-lg-10">
            <div className="text-center mb-14">
              <h2 className="text-[hsl(0,0%,13%)] font-semibold mb-3.5">
                The <span className="text-highlight">Smarter</span> Way to
                Source Interpretation Services
              </h2>
              <p className="text-[hsl(0,0%,51%)] mx-auto text-lg leading-tight">
                Transform your multilingual operations with on-demand access to
                thousands of professional interpreters worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="pr-12">
            <div className="p-[56px,40px] rounded-lg bg-white">
              <div className="pb-[38px] mb-[38px] border-b bg-black/1">
                <h5 className="font-semibold mb-2.5 flex items-center text-xl">
                  <span className="text-[hsl(226,100%,33%)] text-sm mb-3.5 size-6 flex items-center rounded-full border border-[hsl(226,100%,33%)]">
                    {" "}
                    <CheckCircle />{" "}
                  </span>
                  Zero recruitment costs
                </h5>
                <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                  Pre-vetted interpreters ready to work
                </p>
              </div>
              <div className="pb-[38px] mb-[38px] border-b bg-black/1">
                <h5 className="font-semibold mb-2.5 flex items-center text-xl">
                  <span className="text-[hsl(226,100%,33%)] text-sm mb-3.5 size-6 flex items-center rounded-full border border-[hsl(226,100%,33%)]">
                    {" "}
                    <CheckCircle />{" "}
                  </span>
                  No infrastructure needed
                </h5>
                <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                  Interpreters use their own equipment
                </p>
              </div>
              <div className="pb-[38px] mb-[38px] border-b bg-black/1">
                <h5 className="font-semibold mb-2.5 flex items-center text-xl">
                  <span className="text-[hsl(226,100%,33%)] text-sm mb-3.5 size-6 flex items-center rounded-full border border-[hsl(226,100%,33%)]">
                    {" "}
                    <CheckCircle />{" "}
                  </span>
                  Instant scalability
                </h5>
                <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                  From urgent one-off calls to major international events
                </p>
              </div>
              <div className="pb-[38px] mb-[38px] border-b bg-black/1">
                <h5 className="font-semibold mb-2.5 flex items-center text-xl">
                  <span className="text-[hsl(226,100%,33%)] text-sm mb-3.5 size-6 flex items-center rounded-full border border-[hsl(226,100%,33%)]">
                    {" "}
                    <CheckCircle />{" "}
                  </span>
                  24/7 coverage
                </h5>
                <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                  Round-the-clock availability across all time zones
                </p>
              </div>
              <div className="pb-[38px] mb-[38px] border-b bg-black/1">
                <h5 className="font-semibold mb-2.5 flex items-center text-xl">
                  <span className="text-[hsl(226,100%,33%)] text-sm mb-3.5 size-6 flex items-center rounded-full border border-[hsl(226,100%,33%)]">
                    {" "}
                    <CheckCircle />{" "}
                  </span>
                  Pay-as-you-go
                </h5>
                <p className="text-base text-[hsl(0,0%,46%)] font-normal">
                  Only pay for active interpretation time
                </p>
              </div>
            </div>
          </div>
          <div className="pl-12">
            <div>
              <Image
                src="/facility-image.webp"
                width={510}
                height={510}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySection;
