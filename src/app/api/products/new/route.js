import { insertNewProduct, findAdmin } from "@/utils/dbFunctions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const { title, details, id_category} = await req.json();
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید",},{ status: 401 });
        }
        const admin = await findAdmin(session.user.email);
        if(!admin){
            return NextResponse.json({error: "حساب کاربری یافت نشد"},{status: 404});
        }
        if(!id_category || !title || !details){
            return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"},{status: 400});
        }
        const insert = await insertNewProduct({title,details,id_category});
        if(insert.affectedRows > 0){
            return NextResponse.json({message: "محصول جدید با موفقیت ثبت شد", id: insert.insertId},{status:200});
        }else{
            return NextResponse.json({error: "خطایی در سرور رخ داده است"},{status:500});
        }
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"},{status:500});
    }
}