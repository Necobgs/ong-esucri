'use client'

import formatDate from "@/common/formatDate"
import Notice from "@/interfaces/notice"
import { api } from "@/services/api"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"


export default function News(){
    const [notices,setNotices] = useState<Notice[]>([])
        const [loading, setLoading] = useState(true)
    
        useEffect(()=>{
            api.get("/notice")
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
                    <Grid container spacing={3} columns={4}>
                    {notices.map((notice)=>(
                        <Grid size={1} key={notice.id}>
                            <Card >
                                <CardActionArea
                                    onClick={() => console.log('clicou')}
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
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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