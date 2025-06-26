'use client'

import { Alert, Button, CircularProgress, Fade, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import Configuration from "@/interfaces/configuration"
import { AxiosResponse } from "axios"
import Pagination from "@/interfaces/pagination"
import renderField from "@/common/renderFieldConfiguration"
import SnackBarAlert from "@/components/SnackBarAlert/SnackBarAlert"
import { useAuth } from "@/contexts/AuthContext"


export default function FinancialPage() {
    const [configs, setConfigs] = useState<Configuration[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false); // Estado para salvar
    const [sucess, setSucess] = useState<boolean>(false); // Estado para erros
    const [message, setMessage] = useState<string | null>(null); // Estado para sucesso
    const [showMessage, setShowMessage] = useState(false);
    const authContext = useAuth()

    useEffect(() => {
    api.get('/configuration', { params: { module_name: 'transaction', }})
      .then((response: AxiosResponse<Pagination<Configuration>>) => {
        setConfigs(response.data.items);
        setLoading(false);
      })
      .catch((e) => {
        console.log('Erro ao buscar configurações');
        console.error(e);
        setLoading(false);
      });
  }, []); // Empty dependency array

    

    const handleChange = (key: string, newValue: string) => {
        setConfigs(prev =>
            prev.map(config =>
                config.key === key ? { ...config, value: newValue } : config
            )
        )
    }

    const handleSave = async () => {
        setSaving(true);
        setSucess(false);
        setMessage(null);


            await api.patch(`/configuration`,configs,{
                headers: authContext.getAuthorization()
            })
                .then(()=>{
                    console.log(`Atualizado com sucesso`)
                    setMessage('Configurações salvas com sucesso!');
                    setShowMessage(true)
                    setSucess(true)
                    setTimeout(() => {
                        setShowMessage(false)
                        setTimeout(() => setMessage(null), 500); // Remove texto após o fade
                    }, 5000);
                })
                .catch((error)=>{
                    console.log(`Não foi possível atualizar: ${error}`)
                    setMessage(error.response?.data?.message || 'Erro ao salvar configurações');
                })
                .finally(()=>{
                    setSaving(false);
                })

    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="pl-20 pr-20 pt-10 pb-10">
            <SnackBarAlert message={message} severity={sucess ? "success" : "error"} visible={showMessage} />
            <h1 className="font-semibold text-2xl font-sans pb-5">Financeiro</h1>
            <Grid container spacing={3} columns={4}>
                <Grid size={2}>
                    {renderField("pix_key",configs,handleChange)}
                </Grid>
            </Grid>
            <div className="mt-5 flex">
                <Button
                    variant="contained"
                    onClick={handleSave}
                    disabled={saving}
                    startIcon={saving ? <CircularProgress size={20} /> : null}
                >
                    {saving ? 'Salvando...' : 'Salvar Configurações'}
                </Button>
            </div>
        </div>
    )
}
