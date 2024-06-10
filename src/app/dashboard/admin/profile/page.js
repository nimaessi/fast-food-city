import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import ProfilePage from "@/template/admin/profilePage";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/dashboard/admin/login");
  return (
    <ProfilePage />
  )
}

export default page; 