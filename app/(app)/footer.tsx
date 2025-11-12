import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto text-white bg-[hsl(0,0%,13%)]">
      <div className="container mx-auto px-3 w-full">
        <div
          className="footer-area__top relative rounded-[0px,0px,12px,12px] -mt-16 
        bg-[hsl(226,100%,16.5%)]"
        >
          <div className="flex relative justify-between p-[40px,60px]">
            <div>
              <h4 className="text-white mb-2.5 text-3xl" data-s-length="1">
                I'm looking for interpretation{" "}
                <span className="text-highlight">work</span>
              </h4>
              <p className="mb-6 max-w-96 text-white">
                {" "}
                Join our global network of professional interpreters.Connect
                with companies worldwide, and get hired for projects that match
                your expertise.{" "}
              </p>
              <Link href="/register" className={cn(buttonVariants())}>
                Create Interpreter Account{" "}
              </Link>
            </div>
            <div>
              <h4 className="text-white mb-2.5 text-3xl">
                I need interpreters for my{" "}
                <span className="text-highlight">project</span>
              </h4>
              <p className="mb-6 max-w-96 text-white">
                {" "}
                Access verified interpretation talent on-demand. Post your
                requirements, hire skilled interpreters instantly, and manage
                all your language service needs in one place.{" "}
              </p>
              <Link href="/register" className={cn(buttonVariants())}>
                Create Client Account{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[40px,20px] py-14">
          <div>
            <h5 className="footer-item__title"> Navigation </h5>
            <ul className="footer-menu">
              <li className="footer-menu__item">
                <a href="https://rh.defrilex.com" className="footer-menu__link">
                  Home{" "}
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/blogs"
                  className="footer-menu__link"
                >
                  Blogs{" "}
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/contact"
                  className="footer-menu__link"
                >
                  Contact Us{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="footer-item__title"> Important Link </h5>
            <ul className="footer-menu">
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/freelancer/login"
                  className="footer-menu__link"
                >
                  {" "}
                  Login Now{" "}
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/buyer/job/post/form"
                  className="footer-menu__link"
                >
                  {" "}
                  Post a Job{" "}
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/freelance-jobs"
                  className="footer-menu__link"
                >
                  Find a Jobs{" "}
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/talents"
                  className="footer-menu__link"
                >
                  Find a Talent{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="footer-item__title"> Terms </h5>
            <ul className="footer-menu">
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/policy/privacy-policy"
                  className="footer-menu__link"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/policy/terms-of-service"
                  className="footer-menu__link"
                >
                  Terms of Service
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/policy/bid-policy"
                  className="footer-menu__link"
                >
                  Bid Policy
                </a>
              </li>
              <li className="footer-menu__item">
                <a
                  href="https://rh.defrilex.com/cookie-policy"
                  className="footer-menu__link"
                >
                  Cookie Policy{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="footer-item__title"> Contact Us</h5>
            <ul className="footer-contact-menu">
              <li className="footer-contact-menu__item">
                <div className="footer-contact-menu__item-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="footer-contact-menu__item-content">
                  <p> 12000 Biscayne Blvd Suite 205, Miami, FL 33181</p>
                </div>
              </li>
              <li className="footer-contact-menu__item">
                <div className="footer-contact-menu__item-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="footer-contact-menu__item-content">
                  <a title="Call us" href="tel:+1(888) 982-0561">
                    +1(888) 982-0561
                  </a>
                </div>
              </li>
              <li className="footer-contact-menu__item">
                <div className="footer-contact-menu__item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="footer-contact-menu__item-content">
                  <a title="E-mail us" href="mailto:contact@defrilex.com">
                    contact@defrilex.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="social-list-wrapper">
              <p className="title">Follow Us </p>
              <ul className="social-list">
                <li className="social-list__item">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Facebook"
                    className="social-list__link flex-center"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li className="social-list__item">
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    title="X"
                    className="social-list__link flex-center"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>{" "}
                </li>
                <li className="social-list__item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    title="Linkedin"
                    className="social-list__link flex-center"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>{" "}
                </li>
                <li className="social-list__item">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    title="Instagram"
                    className="social-list__link flex-center"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(53,52,52)] py-3">
        <div className="container mx-auto py-3 w-full">
          <div className="flex flex-wrap gap-y-3">
            <div className="text-center">
              <div className="text-white">
                {" "}
                Copyright ©2025
                <a href="https://rh.defrilex.com">Defrilex</a> All rights
                reserved .
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
