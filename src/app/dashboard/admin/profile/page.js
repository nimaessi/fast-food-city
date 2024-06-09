import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Header from "@/module/admin/Header";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/dashboard/admin/login");
  return (
    <>
      <Header />
    </>
  )
}

export default page; 