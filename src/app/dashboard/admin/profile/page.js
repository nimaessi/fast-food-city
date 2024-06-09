import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/dashboard/admin/login");
  return (
    <div className = "text-light fs-1">PROFILE ..... ADMIN</div>
  )
}

export default page; 