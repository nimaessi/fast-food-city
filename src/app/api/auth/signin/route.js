import { hashPassword } from "@/utils/auth";
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
        const hashPss = await hashPassword(password);
        return NextResponse.json({res: hashPss},{status: 200});

    } catch(err){
        return NextResponse.json({error: "An error occurred"},{status: 500});
    }
}