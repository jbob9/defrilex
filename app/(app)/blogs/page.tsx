import CustomBreadcrumb from "@/components/custom-breadcrumb";
import BlogCard from "./blog-card";

const blogs = [
  {
    image: "/blog-image-1.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "07 Jan, 2025",
  },
  {
    image: "/blog-image-2.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "12 Jan, 2025",
  },
  {
    image: "/blog-image-3.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "14 Jan, 2025",
  },
  {
    image: "/blog-image-4.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "20 Jan, 2025",
  },
  {
    image: "/blog-image-5.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "24 Jan, 2025",
  },
  {
    image: "/blog-image-6.webp",
    title: "The ultimate guide to creating a Wix website",
    createdAt: "31 Jan, 2025",
  },
];

const Blogs = () => {
  return (
    <div>
      <CustomBreadcrumb
        title="Blogs"
        links={[
          { title: "Home", path: "/" },
          { title: "Blogs", path: "/blogs" },
        ]}
      />

      <div className="container mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {blogs.map((blog, i) => (
            <BlogCard
              key={i}
              title={blog.title}
              createdAt={blog.createdAt}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
