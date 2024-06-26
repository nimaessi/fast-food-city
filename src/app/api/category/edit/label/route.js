import { findAdmin, upadteCategory } from "@/utils/dbFunctions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(){
    try{
        const {title, slug, disable, id_category} = await req.json();
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید",},{ status: 401 });
        }
        const admin = await findAdmin(session.user.email);
        if(!admin){
            return NextResponse.json({error: "حساب کاربری یافت نشد"},{status: 404});
        }
        if(!title || !slug || !id_category){
            return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"},{status: 400});
        }
        const update = upadteCategory({title,slug,disable,id_category});
        if(update.affectedRows > 0){
            return NextResponse.json({message: "تغییرات با موفقیت انجام شد"},{status: 200});
        }else{
            return NextResponse.json({message: "دسته بندی مورد نظر یافت نشد"},{status: 404});
        }       
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"},{status:500});
    }
}