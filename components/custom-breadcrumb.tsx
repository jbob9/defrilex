import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CustomBreadcrumb = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; path: string }[];
}) => {
  return (
    <section
      className="mb-0 relative z-1 py-16 bg-cover w-full h-full bg-no-repeat flex flex-wrap breadcrumb"
      style={{ background: "url('/breadcrumb-bg.webp')" }}
    >
      <div className="container mx-auto w-full px-3">
        <div className="flex flex-wrap justify-center mx-3">
          <div className="max-w-full px-3">
            <div className="text-center">
              <h3 className="text-white mb-1 text-2xl md:text-4xl">{title}</h3>
              <ul className="flex flex-wrap justify-center gap-1.5">
                {links.map((link, i) => {
                  return (
                    <>
                      <li key={i} className="text-white font-normal p-[0,5px]">
                        <Link
                          href={link.path}
                          className="text-white font-medium capitalize"
                        >
                          {link.title}
                        </Link>
                      </li>
                      {i + 1 !== links.length ? (
                        <li className="text-white font-normal p-[0,5px]">
                          <ChevronRight />
                        </li>
                      ) : null}
                    </>
                  );
                })}
                {/* <li className="text-white font-normal p-[0,5px]">
                  <a
                    href="https://rh.defrilex.com"
                    className="text-white font-medium"
                  >
                    Home
                  </a>
                </li>
                <li className="text-white font-normal p-[0,5px]">
                  <ChevronRight />
                </li>
                <li className="breadcrumb__item">
                  {" "}
                  <span className="breadcrumb__item-text">Contact Us</span>{" "}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBreadcrumb;
