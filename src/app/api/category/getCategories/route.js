import { NextResponse } from "next/server";
import { selectCategory } from "@/utils/dbFunctions";

export async function GET(){
    try{
        const data = await selectCategory();
        return NextResponse.json(data,{status: 200});
    }catch(err){
        return NextResponse.json({err: "An error occurred"},{status:500});
    }
}