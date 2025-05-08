import Button from "../Button/Button";

interface CtaProps{
    titulo:string;
    descricao: string;
    ctaTitulo:string;
    buttonText:string;
}

export default function Cta({
    titulo,
    descricao,
    ctaTitulo,
    buttonText
}:CtaProps){
    return(
        <section className="bg-[#CBCBCB] px-4 md:px-0 py-26">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-[32px] md:text-[64px] font-bold text-zinc-900 ff-SourGummy-bold mb-6 sm:leading-15 leading-12">
                        {titulo}
                    </h2>
                    <p className="text-zinc-800">
                        {descricao}
                    </p>
                </div>
                
                <div className="md:w-2/4 flex flex-col ml-auto text-center">
                    <h2 className="text-[32px] md:text-[64px] font-bold text-zinc-900 ff-SourGummy-bold mb-6 sm:leading-15 leading-12">
                        {ctaTitulo}
                    </h2>
                    <Button>{buttonText}</Button>
                </div>
            </div>
        </section>
    );
}