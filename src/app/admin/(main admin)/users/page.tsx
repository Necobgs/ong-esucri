'use client'

import User from "@/interfaces/user"
import { api } from "@/services/api"
import { Button, Card, CardActionArea, CardContent, Grid, Pagination, Typography } from "@mui/material"
import { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const limit = 10 // Número de usuários por página
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        api.get("/user", {
            params: {
                sortBy: 'created_at',
                order: 'ASC',
                page: page,
                limit: limit
            }
        })
            .then((response: AxiosResponse<{ data: User[]; total: number }>) => {
                setUsers(response.data.data || []) // Garante que users seja um array
                const totalCount = response.data.total || 0
                setTotalPages(Math.ceil(totalCount / limit))
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar usuários:", error)
                setUsers([]) // Define um array vazio em caso de erro
            })
            .finally(() => {
                setLoading(false)
            })
    }, [page])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    if (loading) return <div>Carregando...</div>

    return (
        <div className="pl-20 pr-20 pt-10 pb-10">
            <h1 className="font-semibold text-2xl font-sans pb-5">Usuários</h1>
            <div className="mt-5 mb-5 w-full flex justify-end items-end">
                <Button variant="contained" onClick={() => router.push('/admin/users/create')}>
                    Adicionar usuário
                </Button>
            </div>
            <Grid container spacing={3} columns={{ sm: 1, md: 2, lg: 3, xl: 4, xs: 1 }}>
                {users.length > 0 ? (
                    users.map((user) => (
                        <Grid size={1} key={user.id}>
                            <Card>
                                <CardActionArea
                                    onClick={() => router.push(`/admin/users/${user.id}`)}
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
                    ))
                ) : (
                    <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                        Nenhum usuário encontrado.
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