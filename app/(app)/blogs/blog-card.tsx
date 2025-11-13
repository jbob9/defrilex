import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  title,
  createdAt,
  image,
}: {
  title: string;
  createdAt: string;
  image: string;
}) => {
  return (
    <Link
      href={"/blogs"}
      className="overflow-hidden w-full h-full relative rounded-md z-1 blog-card"
    >
      <div className="overflow-hidden rounded-md max-h-[400px] w-full h-full">
        <Image
          src={image}
          width={356}
          height={226}
          className="w-full h-full object-cover max-w-full"
          alt=""
        />
      </div>
      <div className="absolute bottom-5 left-4 z-2 w-[90%] md:w-[85%]">
        <h6 className="text-white overflow-hidden text-ellipsis mb-2.5 text-xl">
          {title}
        </h6>
        <ul className="gap-2.5 flex-wrap items-center">
          <li className="relative text-white font-semibold">{createdAt}</li>
        </ul>
      </div>
    </Link>
  );
};

export default BlogCard;
