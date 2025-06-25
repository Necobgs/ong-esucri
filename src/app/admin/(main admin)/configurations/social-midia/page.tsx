'use client'

import { Grid, TextField } from "@mui/material"
import { useState } from "react"

export default function Configurations() {
    const [configs, setConfigs] = useState([
        { key: "a", name: "Número do Whatsapp", value: "(48) 99679-4400", type: "varchar" },
        { key: "b", name: "URL do instagram", value: "www.com", type: "varchar" },
        { key: "c", name: "Senha da API", value: "secreta", type: "password" },
        { key: "d", name: "Descrição", value: "Texto grande", type: "text" },
    ])

    const getConfig = (key: string) => configs.find(c => c.key === key)!

    const handleChange = (key: string, newValue: string) => {
        setConfigs(prev =>
            prev.map(config =>
                config.key === key ? { ...config, value: newValue } : config
            )
        )
    }

    const renderField = (configKey: string) => {
        const config = getConfig(configKey)
        switch (config.type) {
            case 'password':
                return (
                    <TextField
                        label={config.name}
                        type="password"
                        value={config.value}
                        onChange={(e) => handleChange(config.key, e.target.value)}
                        fullWidth
                    />
                )
            case 'text':
                return (
                    <TextField
                        label={config.name}
                        multiline
                        minRows={15}
                        value={config.value}
                        onChange={(e) => handleChange(config.key, e.target.value)}
                        fullWidth
                    />
                )
            case 'varchar':
            default:
                return (
                    <TextField
                        label={config.name}
                        value={config.value}
                        onChange={(e) => handleChange(config.key, e.target.value)}
                        fullWidth
                    />
                )
        }
    }

    return (
        <div className="pl-20 pr-20 pt-10 pb-10">
            <h1 className="font-semibold text-2xl font-sans pb-5">Redes Sociais</h1>
            <Grid container spacing={3} columns={3}>
                <Grid>
                    {renderField("a")}
                </Grid>
                <Grid>
                    {renderField("b")}
                </Grid>
                <Grid>
                    {renderField("c")}
                </Grid>
                <Grid size={3}>
                    {renderField("d")}
                </Grid>
            </Grid>
        </div>
    )
}
