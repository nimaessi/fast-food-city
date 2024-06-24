import { deleteAllPrice, deleteProduct, findAdmin } from "@/utils/dbFunctions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try{
        const {id_product} = await req.json();
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید",},{ status: 401 });
        }
        const admin = await findAdmin(session.user.email);
        if(!admin){
            return NextResponse.json({error: "حساب کاربری یافت نشد"},{status: 404});
        }
        if(!id_product){
            return NextResponse.json({error: "لطفا اطلاعات معتبر وارد کنید"},{status: 400});
        }
        const delete_all_price = await deleteAllPrice(id_product);

        if(delete_all_price.affectedRows > 0){

            const deleteProducts = await deleteProduct(id_product);
            if(deleteProducts.affectedRows > 0){
                return NextResponse.json({message: "محصول حذف شد"},{status: 200});
            }else{
                return NextResponse.json({error:"محصول مورد نظر یافت نشد"},{status: 404});
            }
        }else{
            return NextResponse.json({error:"محصول مورد نظر یافت نشد"},{status: 404});
        } 
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"},{status:500});
    }
}