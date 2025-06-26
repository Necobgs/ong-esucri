'use client'

import NoticeForm from "@/components/NoticeForm/NoticeForm";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import NoticeFormData from "@/interfaces/NoticeFormData";
import { useRouter } from "next/navigation";


export default function CreateNoticePage(){
    const router = useRouter()
    const authContext = useAuth()

    async function Save(data:FormData){
        await api.post('notice',data,{
            headers:{
                ...authContext.getAuthorization(),
                // 'Content-Type': 'multipart/form-data'
            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            throw new Error(error)
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <NoticeForm
                onCancel={()=>{router.back()}}
                isEditing={false}
                onSave={Save}
            />
        </div>
    )
}