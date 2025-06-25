import Configuration from "@/interfaces/configuration"
import getConfig from "./getConfig"
import { TextField } from "@mui/material"
import DraftEditor from "@/components/DraftEditor/DraftEditor"


export default function renderField(configKey: string,configs:Configuration[],handleChange:(key: string, newValue: string) =>void){
        const config = getConfig(configKey,configs)
        switch (config.type){
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
            case 'html':
                return (
                    <DraftEditor 
                    value={config.value}
                    onChange={(e)=> handleChange(config.key,e)}/>
                )
            case 'text':
                return (
                    <TextField
                        label={config.name}
                        multiline
                        minRows={10}
                        value={config.value}
                        onChange={(e) => handleChange(config.key, e.target.value)}
                        fullWidth
                    />
                )
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