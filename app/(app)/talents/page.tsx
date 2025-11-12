import CustomBreadcrumb from "@/components/custom-breadcrumb";

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
    </div>
  );
};

export default Talents;
