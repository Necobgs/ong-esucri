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

    async function save(data:FormData){
        await api.patch(`/notice/${id}`,data,{
            headers:{...authContext.getAuthorization(),
                'Content-Type': 'multipart/form-data',
            },
        }).catch((error)=>{
            throw new Error(error)
        })
    }

    async function remove(){
        await api.delete(`/notice/${id}`,{
            headers:authContext.getAuthorization()
        })
        .then(()=>{
            router.push('/admin/notice')
        })
        .catch((error)=>{
            console.log(`Erro ao remover a noticia: ${error.message}`)
            throw new Error(error)
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <NoticeForm
                onRemove={remove}
                isEditing={true}
                onSave={save}
                initialData={notice}
            />
        </div>
    )
}