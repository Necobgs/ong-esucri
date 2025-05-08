import Image from "next/image";
import CourseCard from "@/components/course-card/course-card";
import Carroussel from "@/components/carrossel/Carroussel";
import LinhaIcones from "@/components/LinhaIcones/LinhaIcones";
import Button from "@/components/Button/Button";
import Titulo from "@/components/Titulo/Titulo";
import ParceirosGrid from "@/components/ParceirosGrid/ParceirosGrid";

export default function Home(){
    let cards = [
        {
            userImage:'img user',
            title:'11111111111',
            comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.'
        },
        {
            userImage:'img user',
            title:'222222222222',
            comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.'
        },
        {
            userImage:'img user',
            title:'3333333333',
            comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.'
        }
    ]
 
    return (
    <>
    <section className="min-h-[100dvh] w-full flex flex-col pl-[10%] pr-[10%]">
        <article className="flex justify-around items-center gap-[10%] w-full h-[80vh]">
            <div className="w-[50%] flex gap-[25px] flex-col">
                <Titulo as="h1" className="text-amber-500 text-left">
                    Transformando Vidas com Educação, Inclusão e Amor
                </Titulo>
                <p className="font-medium text-[16px] ff-NunitoSans">
                Desde 1985, o Instituto de Educação Especial Diomício Freitas promove 
                o desenvolvimento de jovens e adultos com deficiência intelectual e TEA, 
                preparando-os para o mercado de trabalho e para o exercício da cidadania 
                por meio da educação, do acolhimento e da inclusão.
                </p>
                <div className="flex justify-start items-center gap-6 text-white">
                    <Button className="bg-[#866AFF]">QUERO ME VOLUNTARIAR</Button>
                    <Button className="bg-[#866AFF]">QUERO FAZER UMA DOAÇÃO</Button>
                </div>
            </div>

            <div className="w-[40%] h-[420px] relative rounded-lg overflow-hidden">
                <Image
                    src="/images/home/fotoHead.jpeg"
                    alt="Imagem"
                    fill
                    style={{objectFit:"cover"}}
                    priority
                />
            </div>

        </article>
        <LinhaIcones></LinhaIcones>
    </section>

        <section className="h-[60dvh] w-full bg-amber-400 flex items-center justify-center flex-row mt-10 mb-10 gap-20">
            <div className="pl-8 text-start w-1/4 text-5xl rounded-t-full rounded-br-full bg-amber-200 h-3/4 flex items-center justify-center ff-SourGummy-bold">Incluir é amar com atitude.</div>
            <div className="w-4/8">
            <Titulo as="h2" className="text-left mb-5"> Sobre o Instituto</Titulo> 
                <p className="text-xl ff-NunitoSans">
                O Instituto Diomício Freitas é uma entidade filantrópica sem fins lucrativos, 
                referência na educação especial em Criciúma e região. Ao longo de quase <b>40 anos</b>, 
                já acolheu mais de <b>500 educandos</b> com <b>deficiência intelectual</b>, promovendo formação 
                cidadã e profissional, com oficinas, cursos e parcerias com empresas locais.
                </p>
            </div>
        </section>
        
        <section className="w-full flex items-center justify-center flex-col gap-12 mt-20 mb-20">
            <h2 className="text-6xl ff-SourGummy-bold text-[#FF7E1C]">Missão, Visão e Valores</h2>
            <article className="flex flex-row w-3/4 gap-5">
                <p className="card-texto w-1/3 text-center">Oferecer formação educacional e profissional a pessoas com deficiência intelectual, promovendo sua autonomia, dignidade e inserção no mercado de trabalho.</p>
                <p className="card-texto w-1/3 text-center">Ser reconhecido como modelo de inclusão e educação especial no sul de Santa Catarina, ampliando cada vez mais o número de vidas impactadas.</p>
                <p className="card-texto w-1/3 text-center">Respeito às diferenças, solidariedade, inclusão, cidadania, comprometimento social e valorização do ser humano.</p>
            </article>
            <span className="flex items-center justify-center flex-col gap-5">
                <p className="text-center text-3xl ff-SourGummy-bold">Nossa história completa</p>
                <Button className="bg-[#866AFF]">Quero conhecer</Button>
            </span>

        </section>
        <section className="w-full bg-sky-300 flex items-center justify-center flex-col gap-20 p-20 box-border">
            <h2 className="text-6xl ff-SourGummy-bold">Capacitações</h2>
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-20"> 
                <CourseCard icon="icon de exemplo" title="Embalador de Supermercado" text="Curso que ensina práticas de organização, atendimento e preparação de produtos para reposição. Desenvolve responsabilidade, atenção e postura profissional no ambiente comercial."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Informática Básica" text="Capacitação em digitação, navegação na internet e ferramentas do pacote Office. Essencial para o desenvolvimento da autonomia digital e preparação para o mercado moderno."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Artesanato com Jornal" text="Transformação criativa de papel em itens como cestas e porta-retratos. Estimula a coordenação motora, senso estético e consciência ambiental por meio do reaproveitamento."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Biscuit e Cartões Decorativos" text="Oficinas práticas que envolvem modelagem em biscuit e criação de cartões. Promovem criatividade, foco e habilidades manuais, além de possibilitar geração de renda."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Office Boy e Girl" text="Curso voltado ao preparo para funções de apoio administrativo, com foco em responsabilidade, organização, comunicação e rotinas de entrega em empresas e instituições."></CourseCard>
            </article>
        </section>   
        <section className="p-10">
            <div className="text-center w-full p-10 text-6xl ff-SourGummy-bold">
                Relatos
            </div>
            <div className="h-160">
                <Carroussel cards={cards}/>
            </div>
        </section>
        <section className="w-full flex items-center justify-center flex-col gap-20 p-20 box-border">
            <div className="text-center w-full p-10 text-6xl ff-SourGummy-bold">
                Nossas conquistas
            </div>
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-20"> 
                <CourseCard icon="icon de exemplo" title="+500 Alunos Atendidos" text="Mais de 500 jovens e adultos com deficiência intelectual já passaram pelo Instituto, recebendo educação, capacitação e acolhimento de qualidade."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Parcerias que Geram Empregos" text="Através de alianças com empresas da região, dezenas de alunos conquistaram sua vaga no mercado de trabalho, promovendo autonomia e inclusão real."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Quase 40 Anos de História" text="Desde 1985, o Instituto é referência na educação especial em Criciúma, com uma trajetória marcada por dedicação, afeto e compromisso com a cidadania."></CourseCard>
            </article>
        </section>

        <section className="w-full flex items-center justify-center flex-col">
            <div className="w-full p-10 flex items-center justify-center flex-col">
                <h2 className="text-6xl text-center ff-SourGummy-bold">Empresas parceiras</h2>
                <h3 className="text-1xl text-center  ff-NunitoSans">Empresas que acreditam no poder da transformação social caminham ao nosso lado</h3>
            </div>
        </section>

        <ParceirosGrid></ParceirosGrid>

        <section className="w-full flex items-center justify-center flex-col mb-40 px-40">
            <p className="text-2xl text-wrap text-center mb-20 ff-SourGummy-bold">
            Quando uma empresa estende a mão, uma vida inteira se transforma. 
            Ao se tornar nosso parceiro, você ajuda a incluir jovens e adultos 
            com deficiência intelectual no mercado de trabalho, oferecendo não 
            só oportunidades, mas dignidade, pertencimento e esperança.
            Junte-se a nós. Transforme seu impacto em inclusão real.</p>
            <span className="mb-5 text-[64px] ff-SourGummy-bold">Se torne um parceiro!</span>
            <Button>QUERO CONHECER!</Button>
        </section>
        
        <section className="p-50 flex items-center justify-around bg-gray-200">
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center">Seja um<br/>voluntário</span>
                <Button>QUERO ME VOLUNTARIAR</Button>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center">Fale<br/>conosco</span>
                <Button>ENTRAR EM CONTATO</Button>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center">Faça uma<br/>doação</span>
                <Button>QUERO DOAR!</Button>
            </div>
        </section>
    </>
 )   
}