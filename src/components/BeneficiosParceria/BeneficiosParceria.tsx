import { ReactNode } from "react";

type Beneficio = {
  titulo: string;
  descricao: string;
};

type BeneficiosParceriaProps = {
  beneficios: Beneficio[];
};

export default function BeneficiosParceria({ beneficios }: BeneficiosParceriaProps) {
  return (
    <section className="bg-zinc-200 px-4 py-26">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-zinc-900 ff-SourGummy-bold mb-6 sm:leading-12 leading-9">
            O que significa ser nosso parceiro?
          </h2>
          <p className="text-zinc-800">
          Ser nosso parceiro é fazer parte de uma trajetória dedicada à inclusão e 
          ao desenvolvimento de jovens com deficiência intelectual. 
          Com o seu apoio, conseguimos:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {beneficios.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mb-6">
                <img src="../icons/vetor-parcerias.svg" alt="Ícone decorativo" className="mx-auto w-10 h-10" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">{item.titulo}</h4>
                <p className="text-zinc-700 text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
