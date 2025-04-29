interface CardPropertyes{
    userImage:string;
    title:string;
    comment:string;
}

export default function Card(props:CardPropertyes) {
  return (
    <>
    Card Slide {props.title}
    </>
  );
}

