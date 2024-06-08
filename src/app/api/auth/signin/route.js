import { verifyPassword } from "@/utils/auth";
import { findAdmin } from "@/utils/dbFunctions";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const { username, password } = await req.json();
        if (!username || !password) {
            return NextResponse.json(
              { error: "لطفا اطلاعات معتبر وارد کنید" },
              { status: 422 }
            );
        }
        const findAdminData = await findAdmin(username);
        const isValid = await verifyPassword(password, findAdminData[0].password);
        return NextResponse.json({res: isValid},{status: 200});

    } catch(err){
        return NextResponse.json({error: "An error occurred"},{status: 500});
    }
}