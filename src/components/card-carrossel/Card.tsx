interface CardPropertyes{
    userImage:string;
    title:string;
    comment:string;
    className:string;
}

export default function Card(props:CardPropertyes) {
  return (
    <article className={`w-1/3 rounded-2xl h-140 bg-gray-300 flex items-center justify-start flex-col box-border p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${props.className?? ''}`}>
      <div className="h-1/2 flex items-center flex-col justify-center gap-10">
        <div>
          {props.userImage}
        </div>
        <div className="text-center">
          {props.title}
        </div>
      </div>
      <div className="h-1/2 text-center">
        {props.comment}
      </div>
    </article>
  );
}