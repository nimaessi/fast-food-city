import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { findAdmin } from "@/utils/dbFunctions";
export async function POST(req){
    try{
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید",},{ status: 401 });
        }
        const admin = await findAdmin(session.user.email);
        if(!admin){
            return NextResponse.json({error: "حساب کاربری یافت نشد"},{status: 404});
        }
        if(!id_size || !price || !size){
            return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"},{status: 400});
        }
    }catch(err){
        return NextResponse.json({error: "an error occured"},{status:500});
    }
}