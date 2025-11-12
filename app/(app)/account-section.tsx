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
            <div className="bg-[hsl(226,100%,16.5%)] py-[45px] px-[60px] md:py-[30px] md:px-10 w-full relative rounded-lg">
              <div className="max-w-[270px]">
                <h1 className="font-semibold text-white leading-snug text-4xl">
                  I&apos;m looking for interpretation{" "}
                  <span className="text-highlight">work</span>
                </h1>
                <p className="font-semibold max-w-[235px] text-white">
                  {" "}
                  Join our global network of professional interpreters.Connect
                  with companies worldwide, and get hired for projects that
                  match your expertise.
                </p>
                <div className="mt-10 md:mt-5">
                  <Link href="/register" className={cn(buttonVariants())}>
                    Create Interpreter Account
                  </Link>
                </div>
              </div>
              <div className="account-item__thumb">
                <Image width={295} height={208} src="/account-1.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="bg-[hsl(226,100%,16.5%)] py-[45px] px-[60px] md:py-[30px] md:px-10 w-full relative rounded-lg">
              <div className="max-w-[270px]">
                <h3 className="font-semibold text-white leading-snug text-4xl">
                  I need interpreters for my{" "}
                  <span className="text-highlight">project</span>
                </h3>
                <p className="font-semibold max-w-[235px] text-white">
                  {" "}
                  Access verified interpretation talent on-demand. Post your
                  requirements, hire skilled interpreters instantly, and manage
                  all your language service needs in one place.{" "}
                </p>
                <div className="mt-10 md:mt-5">
                  <Link href="/register" className={cn(buttonVariants())}>
                    {" "}
                    Create Client Account
                  </Link>
                </div>
              </div>
              <div className="account-item__thumb">
                <Image width={295} height={208} src="/account-1.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
