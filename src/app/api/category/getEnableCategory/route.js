import { NextResponse } from "next/server";
import { selectEnableCategory } from "@/utils/dbFunctions";

export async function GET(request){
    try{
        const data = await selectEnableCategory();
        return NextResponse.json(data,{status: 200});
    }catch(err){
        return NextResponse.json({err},{status:500});
    }
}