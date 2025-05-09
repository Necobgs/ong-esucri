import Image from "next/image"
import Link from "next/link";

interface Props{
    image:string;
    title:string;
    description:string;
    id:string;
}

export default function CardNews(props:Props){
    return (
        <article className="rounded-2xl h-120 max-w-full flex flex-col items-center justify-start bg-gray-400">
            <Link href={`/noticias/${props.id}`}>
                <div className="max-w-full">
                    <Image
                        src={props.image}
                        alt="Imagem"
                        width={1920}
                        height={1080}
                        className="object-contain max-w-full"
                    />
                </div>
                <div className="p-8 flex flex-col gap-5">
                    <span className="ff-SourGummy-bold">{props.title}</span>
                    <p className="ff-NunitoSans text-sm">{props.description}</p>
                </div>
            </Link>
        </article>
    )
}