import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-[hsl(226,100%,33%)] relative hidden lg:block">
        <Image
          src="/auth.webp"
          alt="Image"
          height={581}
          width={668}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
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
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
