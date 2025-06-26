'use client'

import NoticeForm from "@/components/NoticeForm/NoticeForm";
import UserForm from "@/components/UserForm/UserForm";
import { useAuth } from "@/contexts/AuthContext";
import userFormData from "@/interfaces/UserFormData";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";


export default function CreateNoticePage(){
    const authContext = useAuth()
    const router = useRouter()

    async function save(user:userFormData){
        await api.post('user',user,{
            headers:{
                ...authContext.getAuthorization()
            }
        }).then((response)=>{
            router.push(`/admin/users/${response.data.id}`)
        }).catch((error)=>{
            throw new Error(error)
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <UserForm
                isEditing={false}
                onSave={save}
            />
        </div>
    )
}