'use client'

import NoticeForm from "@/components/NoticeForm/NoticeForm";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import NoticeFormData from "@/interfaces/NoticeFormData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Notice from "@/interfaces/notice";


export default function EditNoticePage(){
    const router = useRouter()
    const { id } = useParams()
    const authContext = useAuth()
    const [notice, setNotice] = useState<Notice | undefined>()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        api.get(`/notice/${id}`).then((response)=>{
            setNotice(response.data)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    if(isLoading) return (<div>Carregando...</div>)

    async function Save(data:FormData){
        console.log('INFORMAÇÕES')
        console.log(data)
        await api.patch(`/notice/${id}`,data,{
            headers:{...authContext.getAuthorization(),
                'Content-Type': 'multipart/form-data',
            },
        }).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            throw new Error(error)
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <NoticeForm
                onCancel={()=>{router.back()}}
                isEditing={true}
                onSave={Save}
                initialData={notice}
            />
        </div>
    )
}