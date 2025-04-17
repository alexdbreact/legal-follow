//components\RemoveBtn.jsx
"use client";
 
import { useRouter } from "next/navigation";
 
export default function RemoveBtn3({ id }) {
    const router = useRouter();
    const removeProduct= async () => {
        const confirmed = confirm("Are you sure?");
 
        if (confirmed) {
            const res = await fetch(`/api/vips?id=${id}`, {
                method: "DELETE",
            });
 
            if (res.ok) {
                router.refresh();
            }
        }
    };
 
    return (
        <button onClick={removeProduct} className="btn btn-sm btn-error ml-2" disabled>
            حذف
        </button>
    );
}