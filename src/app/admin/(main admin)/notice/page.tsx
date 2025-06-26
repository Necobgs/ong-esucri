'use client'

import formatDate from "@/common/formatDate"
import Notice from "@/interfaces/notice"
import { api } from "@/services/api"
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function News(){
    const [notices,setNotices] = useState<Notice[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        api.get("/notice",{
            params:{
                sortBy:'created_at', 
                order:'DESC'
            }
        })
            .then((response:AxiosResponse<Notice[]>)=>{
                setNotices(response.data)
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
                <h1 className="font-semibold text-2xl font-sans pb-5">Noticias</h1>
                <div className="mt-5 mb-5 w-full flex justify-end items-end">
                    <Button variant="contained" onClick={()=>{router.push('/admin/notice/create')}}>Adicionar notícia</Button>
                </div>
                <Grid container spacing={3} columns={{sm:1,md:2,lg:3,xl:4,xs:1}}>
                {notices.map((notice)=>(
                    <Grid size={1} key={notice.id}>
                        <Card
                        style={{height:340}}
                        >
                            <CardActionArea
                                onClick={() => router.push(`/admin/notice/${notice.id}`)}
                                sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                    },
                                },
                                }}
                                style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'column'}}
                            >
                                <CardMedia
                                component="img"
                                height="140"
                                style={{height:'200px'}}
                                image={notice.image ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${notice.image}` : "/images/image.png"}
                                alt={notice.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {notice.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'text.secondary',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3, // Limita a 3 linhas
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        }} >
                                        {notice.description}
                                    </Typography>
                                    <Typography gutterBottom variant="overline" component="div">
                                        {formatDate(notice.created_at)}
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