import Button from "../Button/Button";

export default function HeroSection() {
    return (
      <section className="flex-col text-center px-4 mb-15">
        <div className="mb-6">
          <img src="../icons/vetor-parcerias.svg" alt="Ícone decorativo" className="mx-auto w-60 h-60" />
        </div>
        <h1 className="mb-3 font-bold text-[48px] sm:text-[64px] text-amber-400 ff-SourGummy-bold sm:leading-15 leading-12">
        Juntos, transformamos vidas <br/>
        </h1>
        <p className="max-w-xl mx-auto text-[#10151C] mb-6">
        O Instituto de Educação Especial Diomício Freitas conta com o 
        apoio de empresas, instituições e voluntários que acreditam na 
        inclusão social e na valorização da diversidade. Cada parceria 
        fortalece nossa missão de preparar e qualificar jovens e adultos 
        com deficiência intelectual para o mercado de trabalho e para o 
        exercício pleno da cidadania.
        </p>
        <Button>TORNAR-SE UM PARCEIRO</Button>
      </section>
    );
  }
  