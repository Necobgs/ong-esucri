import Image from "next/image";

interface Props {
  image: string;
  title: string;
  text: string;
  direction: 'default' | 'reverse';
}

export default function TextImage(props: Props) {
  const dict_flex_row = {
    reverse: 'flex-row-reverse',
    default: 'flex-row'
  };

  const dict_text = {
    reverse: 'text-end',
    default: 'text-start'
  };

  const dict_items = {
    reverse: 'flex-end',
    default: 'flex-start'
  };

  return (
    <article className={`w-full flex items-center justify-between ${dict_flex_row[props.direction]}`}>
      <div className={`flex ${dict_items[props.direction]} ${dict_text[props.direction]} flex-col justify-between gap-10 w-2/4`}>
        <span className="ff-SourGummy-bold text-4xl">{props.title}</span>
        <p className={`ff-NunitoSans text-1xl ${dict_text[props.direction]}`}>{props.text}</p>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        {props.image && (
          <Image
            src={`/images/${props.image}`}
            alt={props.title}
            width={400}
            height={300}
            className="rounded-2xl w-full h-auto"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </article>
  );
}