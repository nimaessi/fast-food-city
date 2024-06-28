import { verifyPassword } from "@/utils/auth";
import { findAdmin } from "@/utils/dbFunctions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
////username for login email
export const authOptions = {
    session: { 
      strategy: "jwt",
      maxAge: 1 * 60 * 60 // 1 hours
     },
    providers: [
      CredentialsProvider({
        async authorize(credentials) {
          const { email, password } = credentials;
          if (!email || !password) {
            throw new Error("لطفا اطلاعات معتبر وارد کنید");
          }  
          const admin = await findAdmin(email);
          if(admin.length != 1) throw new Error("نام کاربری اشتباه می باشد");
          const isValid = await verifyPassword(password, admin[0].password);
          if (!isValid) throw new Error(" رمز عبور اشتباه است");
          return { email };
        },
      }),
    ],
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };