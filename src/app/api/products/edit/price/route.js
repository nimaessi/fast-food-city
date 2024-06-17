import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { findAdmin, updatePrice } from "@/utils/dbFunctions";
export async function POST(req){
    try{
        const {price, size, id_size} = await req.json();
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
        if(id_size > 0){
            const update = await updatePrice({price,size,id_size});
            if(update.affectedRows > 0){
                return NextResponse.json({message: "تغییرات با موققیت ثبت شد"},{status:200});
            }else{
                return NextResponse.json({error: "محصول مورد نظر یافت نشد"},{status:404});
            }
        }
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"},{status:500});
    }
}