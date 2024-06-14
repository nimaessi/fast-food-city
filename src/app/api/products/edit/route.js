import { findAdmin, updateProduct } from "@/utils/dbFunctions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    try{
        const {id, title, details} = await req.json();
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید",},{ status: 401 });
        }
        const admin = await findAdmin(session.user.email);
        if(!admin){
            return NextResponse.json({error: "حساب کاربری یافت نشد"},{status: 404});
        }
        if(!id || !title || !details){
            return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"},{status: 400});
        }
        const update = await updateProduct({title, details, id});
        if(update.affectedRows > 0){
            return NextResponse.json({message: "تغییرات با موققیت ثبت شد"},{status:200});
        }else{
            return NextResponse.json({error: "محصول مورد نظر یافت نشد"},{status:404});
        }
    }catch(err){
        return NextResponse.json({err},{status:500});
    }
}