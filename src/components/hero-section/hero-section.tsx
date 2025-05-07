import Button from "../Button/Button";

export default function HeroSection() {
    return (
      <section className="flex-col text-center px-4">
        <div className="mb-6">
          <img src="../icons/vetor-parcerias.svg" alt="Ícone decorativo" className="mx-auto w-60 h-60" />
        </div>
        <h1 className="mb-3 font-bold text-[48px] sm:text-[64px] text-amber-400 ff-SourGummy-bold sm:leading-15 leading-12">
          Lorem ipsum dolor sit amet, <br /> consectetur
        </h1>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, 
        finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae 
        pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis
        aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc 
        lobortis, dapibus arcu.
        </p>
        <Button className="mb-15">
          QUERO FAZER PARTE!
        </Button>
      </section>
    );
  }
  