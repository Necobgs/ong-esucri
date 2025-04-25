interface Props{
    icon:string;
    title:string;
    text:string;
}

export default function CourseCard(props:Props){
    return (
        <article className="flex flex-col justify-center items-center gap-10 w-1/5">
            <div>{props.icon}</div>
            <div className="text-center ">{props.title}</div>
            <div className="text-center ">{props.text}</div>
        </article>
    )
}