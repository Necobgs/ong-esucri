import Image from "next/image"
import Titulo from "../Titulo/Titulo"
import Button from "../Button/Button"
import LinhaIcones from "../LinhaIcones/LinhaIcones"

interface Props{
    title:string;
    description:string;
    textFirstButton:string;
    textSecondButton:string;
    image:string;
}

export default function InitalBanner(props:Props){
    return(
        <section className="min-h-[100dvh] w-full flex flex-col pl-[10%] pr-[10%]">
        <article className="flex justify-around items-center gap-[10%] w-full h-[80vh]">
            <div className="w-[50%] flex gap-[25px] flex-col">
                <Titulo as="h1" className="text-amber-500 text-left">
                    {props.title}
                </Titulo>
                <p className="font-medium text-[16px] ff-NunitoSans">
                {props.description}
                </p>
                <div className="flex justify-start items-center gap-6 text-white">
                    <Button className="bg-[#866AFF]">{props.textFirstButton}</Button>
                    <Button className="bg-[#866AFF]">{props.textSecondButton}</Button>
                </div>
            </div>

            <div className="w-[40%] h-[420px] relative rounded-lg overflow-hidden">
                <Image
                    src={props.image}
                    alt="Imagem"
                    fill
                    style={{objectFit:"cover"}}
                    priority
                />
            </div>

        </article>
        <LinhaIcones></LinhaIcones>
    </section>
    )
}