//components\EditMainsForm.jsx
"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditMainsForm({ id,tit,summ,tash, respo1, respo2, respo3,respo4,from1,from2,from3,from4,datos1,datos2,datos3,datos4,statuz,comment }) {
  
    const [newtit, setNewtit] = useState(tit);
    const [newsumm, setNewsumm] = useState(summ);
    const [newtash, setNewtash] = useState(tash);
    const [newrespo1, setNewrespo1] = useState(respo1);
    const [newrespo2, setNewrespo2] = useState(respo2);
    const [newrespo3, setNewrespo3] = useState(respo3);
    const [newrespo4, setNewrespo4] = useState(respo4);
    const [newfrom1, setNewfrom1] = useState(from1);
    const [newfrom2, setNewfrom2] = useState(from2);
    const [newfrom3, setNewfrom3] = useState(from3);
    const [newfrom4, setNewfrom4] = useState(from4);
    const [newdatos1, setNewdatos1] = useState(datos1);
    const [newdatos2, setNewdatos2] = useState(datos2);
    const [newdatos3, setNewdatos3] = useState(datos3);
    const [newdatos4, setNewdatos4] = useState(datos4);
    const [newstatuz, setNewstatuz] = useState(statuz);
    const [newComment, setNewComment] = useState(comment);
 
    const router = useRouter();
 
    
    
    
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const res = await fetch(`/api/mains/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newtit,newsumm,newtash,newrespo1, newrespo2, newrespo3,newrespo4,newfrom1,newfrom2,newfrom3,newfrom4,newdatos1,newdatos2,newdatos3,newdatos4,newstatuz,newComment }),
            });
 
            if (!res.ok) {
                throw new Error("Failed to update Mains");
            }
 
            router.refresh();
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };
 
    return (
        <>
        <div dir="rtl" className="flex justify-between items-center ">
            <h1 className="font-bold py-10 text-2xl">اضافه الردود من الجهات الواردة في نطاق التأشيرة</h1>
        </div>
     
        <form dir="rtl" onSubmit={handleSubmit} className="p-6 space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex flex-col">
   <label htmlFor="newtit" className="font-semibold text-lg">عنوان الموضوع</label>
            <textarea
                onChange={(e) => setNewtit(e.target.value)}
                name="newtit"
                value={newtit}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap"
                type="text"
                readOnly
                
            />
          </div>
         
          <div className="flex flex-col">
          <label htmlFor="newsumm" className="font-semibold text-lg"> ملخص الموضوع </label>
               <textarea
               name="newsumm"
                onChange={(e) => setNewsumm(e.target.value)}
                value={newsumm}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap "
                type="text"
                rows={6}
                readOnly
            />
            </div>
         
            <div className="flex flex-col">
            <label htmlFor="newtash" className="font-semibold text-lg"> التأشيرة الصادرة</label>
            <textarea
            name="newtash"
                onChange={(e) => setNewtash(e.target.value)}
                value={newtash}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2 h-20 text-wrap"
                type="text"
                readOnly
            />
            </div>
         
            <input
                onChange={(e) => setNewrespo1(e.target.value)}
                value={newrespo1}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={respo1 !== "" && "readOnly"}
            />
            <input
                onChange={(e) => setNewfrom1(e.target.value)}
                value={newfrom1}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={from1 !== "" && "readOnly"}
            />
            <input
                onChange={(e) => setNewdatos1(e.target.value)}
                value={newdatos1}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={datos1 !== "" && "readOnly"}

                
            />
            <input
                onChange={(e) => setNewrespo2(e.target.value)}
                value={newrespo2}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={respo2 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewfrom2(e.target.value)}
                value={newfrom2}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={from2 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewdatos2(e.target.value)}
                value={newdatos2}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={datos2 !== "" && "readOnly"}

            />
           
            <input
                onChange={(e) => setNewrespo3(e.target.value)}
                value={newrespo3}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={respo3 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewfrom3(e.target.value)}
                value={newfrom3}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={from3 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewdatos3(e.target.value)}
                value={newdatos3}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={datos3 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewrespo4(e.target.value)}
                value={newrespo4}
                placeholder="اكتب الرد هنا...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={respo4 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewfrom4(e.target.value)}
                value={newfrom4}
                placeholder="اكتب الجهة الوارد منها الرد...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={from4 !== "" && "readOnly"}

            />
            <input
                onChange={(e) => setNewdatos4(e.target.value)}
                value={newdatos4}
                placeholder="اكتب تاريخ الرد ...."
                className="input input-bordered input-accent w-full max-w-xs p-2"
                type="text"
                readOnly={datos4 !== "" && "readOnly"}

            />
           
   
           </div>
           <input
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                placeholder="اكتب تعليق نهائي...."
                className="input input-bordered input-accent w-full max-w-xs p-2 m-4"
                type="text"
                readOnly={comment !== "" && "readOnly"}

            />
 
            <button className="btn btn-primary w-full max-w-xs">
               حفظ الرد
            </button>

        </form>
        </>
    );
}