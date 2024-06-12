import LoginPage from "@/template/admin/LoginPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard/admin/profile");
  return(
    <LoginPage />
  )
}

export default page;