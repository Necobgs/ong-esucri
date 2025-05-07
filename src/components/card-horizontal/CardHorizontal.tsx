import Image from "next/image";

type CardHorizontalProps = {
  titulo: string;
  descricao: string;
  textoBotao: string;
  imagem: string;
};

export default function CardHorizontal({
  titulo,
  descricao,
  textoBotao,
  imagem,
}: CardHorizontalProps) {
  return (
    <section className="bg-zinc-100 px-4">
      <div className="max-w-6xl mx-auto bg-zinc-300 rounded-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-[40px] font-bold text-zinc-900 mb-4 ff-SourGummy-bold">
            {titulo}
          </h3>
          <p className="text-zinc-800 mb-6 ff-NunitoSans-Medium">{descricao}</p>
          <button className="bg-zinc-900 text-white px-6 py-3 rounded-full font-bold ff-SourGummy-bold">
            {textoBotao}
          </button>
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