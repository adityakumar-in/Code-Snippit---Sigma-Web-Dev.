import { NextResponse } from "next/server";

// In Next Js you don't have to create server manually, you just need to create file named route.js in page based routing like page.js

// route.js is a special file like page.js, which tells Next Js that this file uses GET/POST/DELETE request
export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return NextResponse.json({success: true, data})
} 
  