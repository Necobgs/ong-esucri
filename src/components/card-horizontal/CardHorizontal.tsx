import Image from "next/image";
import Button from "../Button/Button";

type CardHorizontalProps = {
  titulo: string;
  descricao: string;
  textoBotao: string;
  imagem: string;
};

export default function   CardHorizontal({
  titulo,
  descricao,
  textoBotao,
  imagem,
}: CardHorizontalProps) {
  return (
    <section className="bg-zinc-100 px-4">
      <div className="max-w-6xl mx-auto bg-[#9b85ff] rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-[40px] font-bold text-zinc-900 mb-4 ff-SourGummy-bold">
            {titulo}
          </h3>
          <p className="text-zinc-800 mb-6 ff-NunitoSans-Medium">{descricao}</p>
          <Button>
            {textoBotao}
          </Button>
        </div>

        <div className="flex items-center justify-end">
          <div className="bg-zinc-100 rounded-lg p-4 w-110 h-60">
            <Image
              src={imagem}
              alt={`Imagem de ${titulo}`}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}