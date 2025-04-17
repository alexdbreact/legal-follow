import dbConnect from "@/lib/dbConnect";
import Vip from "@/models/Vips";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {tit, summ, start, tash, startDate, startDateout,  respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment, refer } = await request.json();
    await dbConnect();
    await Vip.create({ tit, summ, start, tash, startDate, startDateout,  respo1, respo2, respo3,respo4,respo5, respo6, respo7,respo8,respo9,respo10,from1,from2,from3,from4,from5,from6,from7,from8,from9,from10,datos1,datos2,datos3,datos4,datos5,datos6,datos7,datos8,datos9,datos10,statuz,comment, refer  });
    return NextResponse.json({ message: "Vip Created" }, { status: 201 });
  } 

export async function GET() {
  await dbConnect();
  const vips = await Vip.find({
    $or: [
      {tash :{ "$regex": "الشئون القانونية", "$options": "i" }},
      {tash :{ "$regex": "القانونية", "$options": "i" }},
      {tash :{ "$regex": "قانونية", "$options": "i" }},
      {tash :{ "$regex": "شئون قانون", "$options": "i" }},
      {tash :{ "$regex": "شؤون قانون", "$options": "i" }},
      {tash :{ "$regex": "شؤن قانون", "$options": "i" }},
      {tash :{ "$regex": "الشئون القانونيه", "$options": "i" }},
      {tash :{ "$regex": "الشؤون القانون", "$options": "i" }},
      {tash :{ "$regex": "الشؤن القانون", "$options": "i" }},
      {start :{ "$regex": "الشئون القانونية", "$options": "i" }},
      {start :{ "$regex": "القانونية", "$options": "i" }},
      {start :{ "$regex": "قانونية", "$options": "i" }},
      {start :{ "$regex": "شئون قانون", "$options": "i" }},
      {start :{ "$regex": "شؤون قانون", "$options": "i" }},
      {start :{ "$regex": "شؤن قانون", "$options": "i" }},
      {start :{ "$regex": "الشئون القانونيه", "$options": "i" }},
      {start :{ "$regex": "الشؤون القانون", "$options": "i" }},
      {start :{ "$regex": "الشؤن القانون", "$options": "i" }},
  
  
   
      
     ]
   
   
     }    
       );
  return NextResponse.json({ vips });
}  
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Vip.findByIdAndDelete(id);
  return NextResponse.json({ message: "vip deleted" }, { status: 200 });
}

