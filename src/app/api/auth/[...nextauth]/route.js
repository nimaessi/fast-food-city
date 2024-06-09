import { verifyPassword } from "@/utils/auth";
import { findAdmin } from "@/utils/dbFunctions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          const { username, password } = credentials;
          var admin = [];
          if (!username || !password) {
            throw new Error("لطفا اطلاعات معتبر وارد کنید");
          }  
          try{
            admin = await findAdmin(username);
          } catch(error){
            throw new Error("مشکلی در سرور رخ داده است");
          }
          if(admin.length != 1) throw new Error("نام کاربری اشتباه می باشد");
          const isValid = await verifyPassword(password, admin[0].password);
          if (!isValid) throw new Error(" رمز عبور اشتباه است");
          return { username };
        },
      }),
    ],
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };