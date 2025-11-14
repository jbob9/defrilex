import CustomBreadcrumb from "@/components/custom-breadcrumb";
import AboutSection from "./about-section";
import Testimonials from "./testimonials";
import WorkSection from "./work-section";

const Talents = () => {
  return (
    <div>
      <CustomBreadcrumb
        title="Talents Freelancers"
        links={[
          { title: "Home", path: "/" },
          { title: "Talents freelancers", path: "/talents" },
        ]}
      />

      <div className="mx-4 md:mx-auto max-w-6xl">
        <div className="py-20 md:py-28">
          <WorkSection />
          <AboutSection />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Talents;
