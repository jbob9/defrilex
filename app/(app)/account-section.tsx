import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AccountSection = () => {
  return (
    <div className="my-14 md:my-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-xl-6">
            <div className="bg-[hsl(0,0%,13%)] py-6 px-5 md:py-10 md:px-10 w-full relative rounded-lg flex items-end">
              <div className="max-w-[270px]">
                <h1 className="font-semibold text-white leading-snug text-2xl md:text-4xl">
                  I&apos;m looking for interpretation{" "}
                  <span className="text-highlight">work</span>
                </h1>
                <p className="font-semibold max-w-[235px] text-white text-sm md:text-base mt-2 md:mt-0">
                  {" "}
                  Join our global network of professional interpreters.Connect
                  with companies worldwide, and get hired for projects that
                  match your expertise.
                </p>
                <div className="mt-5 md:mt-10">
                  <Link href="/register" className={cn(buttonVariants())}>
                    Create Interpreter Account
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block">
                <Image width={295} height={208} src="/account-1.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="bg-[hsl(226,100%,16.5%)] py-6 px-5 md:py-10 md:px-10 w-full relative rounded-lg flex items-end">
              <div className="max-w-[270px]">
                <h3 className="font-semibold text-white leading-snug text-2xl md:text-4xl">
                  I need interpreters for my{" "}
                  <span className="text-highlight">project</span>
                </h3>
                <p className="font-semibold max-w-[235px] text-white text-sm md:text-base mt-2 md:mt-0">
                  {" "}
                  Access verified interpretation talent on-demand. Post your
                  requirements, hire skilled interpreters instantly, and manage
                  all your language service needs in one place.{" "}
                </p>
                <div className="mt-5 md:mt-10">
                  <Link href="/register" className={cn(buttonVariants())}>
                    {" "}
                    Create Client Account
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block">
                <Image width={295} height={208} src="/account-2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
