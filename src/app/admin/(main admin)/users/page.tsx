'use client'

import User from "@/interfaces/user"
import { api } from "@/services/api"
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        api.get("/user",{params:{order:'ASC'}})
            .then((response:AxiosResponse<User[]>)=>{
                setUsers(response.data)
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])

    if(loading) return (<div>Carregando...</div>)

    return (
            <div className="pl-20 pr-20 pt-10 pb-10">
                <h1 className="font-semibold text-2xl font-sans pb-5">Usuários</h1>
                <div className="mt-5 mb-5 w-full flex justify-end items-end">
                    <Button variant="contained" onClick={()=>{router.push('/admin/users/create')}}>Adicionar usuário</Button>
                </div>
                <Grid container spacing={3} columns={4}>
                {users.map((user)=>(
                    <Grid size={1} key={user.id}>
                        <Card >
                            <CardActionArea
                                onClick={() => {router.push(`/admin/users/${user.id}`)}}
                                sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                    },
                                },
                                }}
                            >
                                <CardContent sx={{ height: '100%' }}>
                                <Typography variant="h5" component="div">
                                    {user.username}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user.email}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        )
}