import Button from "../Button/Button";

interface HeroSectionProps {
  iconeSrc: string;
  titulo: string;
  descricao: string;
  botaoTexto: string;
  className?: string;
}

export default function HeroSection({
  iconeSrc,
  titulo,
  descricao,
  botaoTexto,
  className = "",
}: HeroSectionProps) {
  return (
    <section className={`flex-col text-center px-4 mb-15 ${className}`}>
      <div className="mb-6">
        <img
          src={iconeSrc}
          alt="Ícone decorativo"
          className="mx-auto w-60 h-60"
        />
      </div>
      <h1 className="mb-3 font-bold text-[48px] sm:text-[64px] text-amber-400 ff-SourGummy-bold sm:leading-15 leading-12">
        {titulo}
      </h1>
      <p className="max-w-xl mx-auto text-[#10151C] mb-6">
        {descricao}
      </p>
      <Button>{botaoTexto}</Button>
    </section>
  );
}