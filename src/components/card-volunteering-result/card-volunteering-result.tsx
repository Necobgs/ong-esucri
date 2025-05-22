import Image from "next/image"

interface Props{
    image:string;
    title:string;
    description:string;
    direction: 'col' | 'row';
}

export default function CardVolunteeringResult(props:Props){
    const flexDirection ={col:'flex-col',row:'flex-row-reverse'}
    const gridCol = {col:'col-span-1',row:'col-span-3'}
    const imageMaxWidth = {col:'w-full',row:'w-1/4'}
    const descriptionWidth = {col:'w-full',row:'w-1/3'}
    return (
        <article className={`${gridCol[props.direction]}  flex items-end justify-between p-8 bg-gray-300 rounded-2xl ${flexDirection[props.direction]} gap-8`}>
            <Image
                src={props.image}
                alt="Imagem"
                width={800}
                height={200}
                className={`${imageMaxWidth[props.direction]} rounded-2xl`}
                style={{objectFit:"cover"}}
            />
            <div className={`flex flex-col gap-6 ${descriptionWidth[props.direction]}`}>
                <h3 className="ff-SourGummy-bold text-4xl w-full text-start">{props.title}</h3>
                <p className="ff-NunitoSans text-1xl">{props.description}</p>
            </div>
        </article>
    )
}