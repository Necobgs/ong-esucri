'use client'

import UserForm from "@/components/UserForm/UserForm";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import User from "@/interfaces/user";
import userFormData from "@/interfaces/UserFormData";


export default function EditUserPage(){
    const router = useRouter()
    const { id } = useParams()
    const authContext = useAuth()
    const [user, setUser] = useState<User | undefined>()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        api.get(`/user/${id}`).then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setIsLoading(false)
        })
    },[])

    if(isLoading) return (<div>Carregando...</div>)

    async function save(user:userFormData){
        await api.patch(`/user/${id}`,user,{
            headers:{...authContext.getAuthorization(),
                'Content-Type': 'multipart/form-data',
            },
        }).catch((error)=>{
            throw new Error(error)
        })
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <UserForm
                isEditing={true}
                onSave={save}
                initialData={user}
            />
        </div>
    )
}