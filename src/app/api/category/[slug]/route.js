import { findCategory } from "@/utils/dbFunctions";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
    try{
        const data = await findCategory(params.slug);
        return NextResponse.json(data,{status:200});
    }catch(err){
        return NextResponse.json({err: "An error occurred"},{status:500});
    }
}