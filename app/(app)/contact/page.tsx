import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  HouseIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneCallIcon,
  Send,
  TwitterIcon,
} from "lucide-react";
import SupportSection from "./support-section";

const Contact = () => {
  return (
    <div>
      <CustomBreadcrumb
        title="Contact Us"
        links={[
          { title: "Home", path: "/" },
          { title: "Contact Us", path: "/contact" },
        ]}
      />
      <div className="mx-4 md:mx-auto max-w-6xl">
        <div className="py-20 md:py-28">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-11 justify-between items-center flex-wrap-reverse gap-6">
              <div className="col-span-full md:col-span-4 order-last md:order-first">
                <div className="relative pt-16 md:pt-[100px] px-[30px] pb-[50px] md:py-[55px] md:px-[30px] contact-item-wrapper max-w-full md:max-w-[316px] bg-white md:bg-transparent rounded-xl md:rounded-none">
                  <h5 className="font-bold leading-tight text-xl text-[hsl(0,0%,13%)] mb-4">
                    Contact with Us
                  </h5>
                  <div>
                    <div className="flex items-start mb-3.5 gap-3.5">
                      <span className="size-11 rounded-full shrink-0 flex justify-center items-center text-[hsl(226,100%,33%)] bg-[hsl(226,100%,33%)]/15">
                        <HouseIcon />
                      </span>
                      <div className="w-[calc(100%-45px)]">
                        <p className="text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          {" "}
                          Office Address{" "}
                        </p>
                        <p className="\text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          12000 Biscayne Blvd Suite 205, Miami, FL 33181
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3.5 gap-3.5">
                      <span className="size-11 rounded-full shrink-0 flex justify-center items-center text-[hsl(226,100%,33%)] bg-[hsl(226,100%,33%)]/15">
                        <Send />
                      </span>
                      <div className="w-[calc(100%-45px)]">
                        <p className="text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          {" "}
                          Email Address{" "}
                        </p>
                        <p className="text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          <a
                            href="mailto:contact@defrilex.com"
                            title="E-mail us"
                            className="text-[hsl(226,100%,33%)]"
                          >
                            contact@defrilex.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start mb-3.5 gap-3.5">
                      <span className="size-11 rounded-full shrink-0 flex justify-center items-center text-[hsl(226,100%,33%)] bg-[hsl(226,100%,33%)]/15">
                        <PhoneCallIcon />
                      </span>
                      <div className="w-[calc(100%-45px)]">
                        <p className="text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          {" "}
                          Phone Number{" "}
                        </p>
                        <p className="text-[hsl(0,0%,46%)] text-base font-normal m-0">
                          <a
                            href="tel:+1(888) 982-0561"
                            title="Call Us"
                            className="text-[hsl(226,100%,33%)]"
                          >
                            +1(888) 982-0561
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-item-wrapper__bottom">
                    <div className="social-list-wrapper">
                      <p className="title"> Follow Us </p>
                      <ul className="flex items-center gap-2.5 mt-2">
                        <li className="social-list__item">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            title="Facebook"
                            className="flex items-center justify-center cursor-pointer rounded-md text-sm size-9 border border-blue-900 text-[hsl(226,100%,33%)]"
                          >
                            <FacebookIcon />
                          </a>{" "}
                        </li>
                        <li className="social-list__item">
                          <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            title="X"
                            className="flex items-center justify-center cursor-pointer rounded-md text-sm size-9 border border-blue-900 text-[hsl(226,100%,33%)]"
                          >
                            <TwitterIcon className="" />
                          </a>{" "}
                        </li>
                        <li className="social-list__item">
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            title="Linkedin"
                            className="flex items-center justify-center cursor-pointer rounded-md text-sm size-9 border border-blue-900 text-[hsl(226,100%,33%)]"
                          >
                            <LinkedinIcon />
                          </a>{" "}
                        </li>
                        <li className="social-list__item">
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            title="Instagram"
                            className="flex items-center justify-center cursor-pointer rounded-md text-sm size-9 border border-blue-900 text-[hsl(226,100%,33%)]"
                          >
                            <InstagramIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full md:col-span-7 order-first md:order-last">
                <div className="rounded-lg p-7 bg-white">
                  <h4 className="mb-4 text-center text-3xl">
                    Let`s Talk with US
                  </h4>
                  <p className="text-center mb-5 text-base font-normal text-[hsl(0,0%,46%)]">
                    Disregard the old standards. You can have the best
                    individuals. At this moment. Here.
                  </p>
                  <form method="post" className="pr-2.5">
                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="font-semibold mb-2 text-sm text-[hsl(0,0%,13%)] required"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            className="rounded-md w-full outline-none bg-white text-black border  font-normal leading-tight text-base block py-[11px] px-4"
                            value=""
                            required
                            id="name"
                          />
                        </div>
                        <div>
                          <label className="font-semibold mb-2 text-sm text-[hsl(0,0%,13%)] required">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="rounded-md w-full outline-none bg-white text-black border font-normal leading-tight text-base block py-[11px] px-4"
                            value=""
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="font-semibold mb-2 text-sm text-[hsl(0,0%,13%)] required"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          name="subject"
                          type="text"
                          className="rounded-md w-full outline-none bg-white text-black border  font-normal leading-tight text-base block py-[11px] px-4"
                          value=""
                          required
                          id="subject"
                        />
                      </div>
                      <div>
                        <label
                          className="font-semibold mb-2 text-sm text-[hsl(0,0%,13%)] required"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="rounded-md w-full outline-none bg-white text-black border  font-normal leading-tight text-base block py-[11px] px-4"
                          required
                          id="message"
                          rows={6}
                        ></textarea>
                      </div>
                      <div>
                        <Button type="submit" className="w-full h-11">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SupportSection />
      </div>
    </div>
  );
};

export default Contact;
