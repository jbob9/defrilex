import { redirect } from "next/navigation";

const JobPost = async () => {
  redirect("/login");

  return <div>JobPost</div>;
};

export default JobPost;
