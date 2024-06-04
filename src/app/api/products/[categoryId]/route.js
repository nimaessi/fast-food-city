import { productOfCategory } from "@/utils/dbFunctions";
import transformData from "@/utils/transformData";
import { NextResponse } from "next/server";

export async function GET (request, { params }){
    try{
        const data = await productOfCategory(params.categoryId);
        const res = await transformData(data);
        return NextResponse.json(res,{status: 200});
    }catch(err){
        return NextResponse.json({err},{status:500});
    }
}