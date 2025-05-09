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
        <div className="flex justify-center mt-4">
          <img
            src={props.userImage}
            alt={`Imagem de ${props.title}`}
            className="w-100 h-40 rounded-lg object-cover"
          />
        </div>
        <div className="text-center ff-NunitoSans-bold text-2xl mb-10">
          {props.title}
        </div>
      </div>
      <div className="h-1/2 text-center ff-NunitoSans">
        {props.comment}
      </div>
    </article>
  );
}