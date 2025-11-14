import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center bg-white min-h-svh pb-12">
      <div className="flex flex-col pt-8 bg-white gap-6 mx-5 min-w-full md:min-w-lg">
        <div className="flex justify-center ">
          <Link href="/">
            <Image
              src="/logo.webp"
              className="w-36 h-8 md:h-11"
              alt=""
              width={168}
              height={45}
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
