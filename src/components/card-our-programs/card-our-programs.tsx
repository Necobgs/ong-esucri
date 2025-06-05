import Titulo from "@/components/Titulo/Titulo"
import Image from "next/image"

interface Props{
    title:string;
    description:string;
    listItems:string[];
    image:string;
}


export default function CardOurPrograms(props:Props){
    return (
        <article className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start justify-center gap-10 w-4/8">
                <Titulo as="h3" className="text-left">{props.title}</Titulo>
                <p>{props.description}</p>
            <ul className="list-disc ml-5">
                {
                    props.listItems.map((item,index)=>
                    <li key={index}>{item}</li>)
                }
                
            </ul>
            </div>
               {props.image && (
                <Image
                    src={props.image}
                    alt="Imagem"
                    className="w-1/3 rounded-2xl"
                    width={1920}
                    height={1080}
                    style={{ objectFit: "cover" }}
                />
            )}
        </article>
    )
}