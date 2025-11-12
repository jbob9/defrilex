import CustomBreadcrumb from "@/components/custom-breadcrumb";

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
      <div className="contact-section mb-120">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center flex-wrap-reverse">
            <div className="col-xl-4">
              <div className="contact-item-wrapper">
                <h5 className="contact-item-wrapper__title">Contact with Us</h5>
                <div>
                  <div className="contact-item">
                    <span className="contact-item__icon">
                      <i className="fa-solid fa-house-user"></i>
                    </span>
                    <div className="contact-item__content">
                      <p className="contact-item__title"> Office Address </p>
                      <p className="contact-item__desc">
                        12000 Biscayne Blvd Suite 205, Miami, FL 33181
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item__icon">
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                    <div className="contact-item__content">
                      <p className="contact-item__title"> Email Address </p>
                      <p className="contact-item__desc">
                        <a
                          href="mailto:contact@defrilex.com"
                          title="E-mail us"
                          className="link"
                        >
                          contact@defrilex.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-item__icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <div className="contact-item__content">
                      <p className="contact-item__title"> Phone Number </p>
                      <p className="contact-item__desc">
                        <a
                          href="tel:+1(888) 982-0561‬"
                          title="Call Us"
                          className="link"
                        >
                          +1(888) 982-0561‬
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-item-wrapper__bottom">
                  <div className="social-list-wrapper">
                    <p className="title"> Follow Us </p>
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
            <div className="col-xl-7">
              <div className="contact-form-wrapper">
                <h4 className="contact-form-wrapper__title">
                  Let`s Talk with US
                </h4>
                <p className="contact-form-wrapper__desc">
                  Disregard the old standards. You can have the best
                  individuals. At this moment. Here.
                </p>
                <form method="post" className="verify-gcaptcha verify-form">
                  <input
                    type="hidden"
                    name="_token"
                    value="WeW4tyDQfLNLMaDXssjYlu2Y4aAwdPf1T4DBAMua"
                    autoComplete="off"
                  />{" "}
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label className="form--label required" htmlFor="name">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="form-control form--control"
                        value=""
                        required
                        id="name"
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label className="form--label required">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control form--control"
                        value=""
                        required
                      />
                    </div>
                    <div className="col-sm-12 form-group">
                      <label className="form--label required" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        className="form-control form--control"
                        value=""
                        required
                        id="subject"
                      />
                    </div>
                    <div className="col-sm-12 form-group">
                      <label className="form--label required" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control form--control"
                        required
                        id="message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn--base w-100">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
