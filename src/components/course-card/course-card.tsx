interface Props{
    icon:string;
    title:string;
    text:string;
}

export default function CourseCard(props:Props){
    return (
        <article className="flex flex-col justify-center items-center gap-10 w-1/5">
            <div className="w-20 h-20">   
                <img
                    src={props.icon}
                    alt={`Imagem de ${props.title}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className="text-center ff-SourGummy-bold text-3xl text-white">{props.title}</div>
            <div className="text-center ff-NunitoSans text-white">{props.text}</div>
        </article>
    )
}