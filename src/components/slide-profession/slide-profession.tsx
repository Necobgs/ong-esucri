import Image from "next/image"
import ProfessionInterface from "@/interfaces/profession"


export default function SlideProfession(props:ProfessionInterface){
    return (
        <article className="flex gap-5 items-start justify-start min-w-full">
            <Image
                    src={props.image}
                    alt="Imagem"
                    width={800}
                    height={200}
                    className="w-1/2 h-full"
                    style={{objectFit:"cover"}}
                    priority
                />
                <div className="box-border pr-15 pl-15 pt-5 pb-5 w-1/2 flex flex-col gap-10 h-full">
                    <h2 className="ff-SourGummy-bold text-3xl">{props.title}</h2>
                    <p className="ff-NunitoSans">{props.description}</p>
                    <div className="w-full grid-cols-2 grid gap-5">
                        {
                            props.details.map((detail,index)=>{
                                return (
                                <div key={index} className="flex items-center justify-between">
                                    <span>{detail.icon}</span>
                                    <div>
                                        <h3 className="ff-SourGummy-bold text-1xl">{detail.title}</h3>
                                        <p className="ff-NunitoSans text-xs">{detail.subtitle}</p>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
        </article>
    )
}