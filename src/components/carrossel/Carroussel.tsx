import Card from "../card-carrossel/Card";

interface CardPropertyes{
  userImage:string;
  title:string;
  comment:string;
}

interface Props{
  cards: CardPropertyes[];
}

export default function Carroussel({ cards }:Props) {
  return (
    <div>
      {cards.map((value, index)=>{
        return (
          <Card key={value.title} {...value}/>
        )
      })}
    </div>
  );
}
