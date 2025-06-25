import Configuration from "@/interfaces/configuration";

export default function getConfig(key: string,configs:Configuration[]){
    return configs.find(c => c.key === key)!
}