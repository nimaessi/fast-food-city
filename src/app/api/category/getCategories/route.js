import { NextResponse } from "next/server";
import { selectCategory } from "@/utils/dbFunctions";

export async function GET(){
    const data = await selectCategory();
    return NextResponse.json({
        data: data
    },{
        status: 200
    });
}