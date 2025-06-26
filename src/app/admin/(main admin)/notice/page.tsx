'use client'

import formatDate from "@/common/formatDate"
import Notice from "@/interfaces/notice"
import { api } from "@/services/api"
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Typography } from "@mui/material"
import { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function News() {
    const [notices, setNotices] = useState<Notice[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const limit = 10 // Número de notícias por página
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        api.get("/notice", {
            params: {
                sortBy: 'created_at',
                order: 'DESC',
                page: page,
                limit: limit
            }
        })
            .then((response: AxiosResponse<{ data: Notice[]; total: number }>) => {
                // Acessa response.data.data para o array de notícias
                setNotices(response.data.data || []) // Garante que notices seja sempre um array
                // Calcula o total de páginas com base no total retornado
                const totalCount = response.data.total || 0
                setTotalPages(Math.ceil(totalCount / limit))
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar notícias:", error)
                setNotices([]) // Define um array vazio em caso de erro
            })
            .finally(() => {
                setLoading(false)
            })
    }, [page]) // Atualiza quando a página muda

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    if (loading) return <div>Carregando...</div>

    return (
        <div className="pl-20 pr-20 pt-10 pb-10">
            <h1 className="font-semibold text-2xl font-sans pb-5">Notícias</h1>
            <div className="mt-5 mb-5 w-full flex justify-end items-end">
                <Button variant="contained" onClick={() => router.push('/admin/notice/create')}>
                    Adicionar notícia
                </Button>
            </div>
            <Grid container spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4, xs: 1 }}>
                {notices.length > 0 ? (
                    notices.map((notice) => (
                        <Grid size={1} key={notice.id}>
                            <Card style={{ height: 340 }}>
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
                                    style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        style={{ height: '200px' }}
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
                                        }}>
                                            {notice.description}
                                        </Typography>
                                        <Typography gutterBottom variant="overline" component="div">
                                            {formatDate(notice.created_at)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                        Nenhuma notícia encontrada.
                    </Typography>
                )}
            </Grid>
            {totalPages > 1 && (
                <div className="mt-5 flex justify-center">
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </div>
            )}
        </div>
    )
}