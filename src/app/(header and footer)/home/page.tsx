import CourseCard from "@/components/course-card/course-card";
import Carroussel from "@/components/carrossel/Carroussel";
import Button from "@/components/Button/Button";
import Titulo from "@/components/Titulo/Titulo";
import ParceirosGrid from "@/components/ParceirosGrid/ParceirosGrid";
import InitalBanner from "@/components/initial-banner/initial-banner";
import CourseCardConquistas from "@/components/course-card-conquistas/course-card-conquistas";


export default function Home(){
    let cards = [
        {
            userImage:'/images/home/relatos/relato2.jpg',
            title:'João, pai do Matheus (22 anos)',
            comment:'"O Matheus sempre teve muita dificuldade de socialização por conta do TEA. Já tínhamos tentado outras instituições, mas ele nunca se adaptava. Quando conhecemos o Instituto Diomício Freitas, nossa esperança foi renovada. Ele foi acolhido com paciência e respeito, e com o tempo passou a se sentir parte de um grupo. Aprendeu a fazer estopas, participou de várias oficinas e até começou a usar o transporte público com autonomia. Sou imensamente grato por tudo."'
        },
        {
            userImage:'/images/home/relatos/relato3.jpg',
            title:'Lúcio, pai do Gabriel (18 anos)',
            comment:'"Quando o Gabriel terminou a escola regular, estávamos perdidos. Ele tem deficiência intelectual e sempre foi muito carinhoso e comunicativo, mas não sabíamos como ele poderia se desenvolver profissionalmente. O Instituto Diomício Freitas acolheu o Gabriel com tanto amor e dedicação que em poucos meses ele já estava mais confiante, aprendendo informática e participando das oficinas. Hoje, ele está fazendo estágio em um supermercado. Ver o brilho nos olhos dele quando volta pra casa é algo que não tem preço."'
        },
        {
            userImage:'/images/home/relatos/relato1.jpg',
            title:'Renata, mãe da Larissa (16 anos)',
            comment:'"A Larissa sempre foi muito criativa, mas não tinha oportunidades de desenvolver isso de forma prática. No Instituto, ela se encantou com a oficina de artesanato em jornal. Além de aprender uma nova habilidade, ela entendeu o valor do trabalho e da sustentabilidade. Eu, como mãe, também encontrei acolhimento: hoje faço parte do grupo de mães que se reúne toda quarta-feira. O Instituto mudou não só a vida da minha filha, mas a minha também."'
        }
    ]
 
    return (
    <>
        
        <InitalBanner image="/images/home/fotoHead.jpeg" textSecondButton="QUERO FAZER UMA DOAÇÃO" textFirstButton="QUERO ME VOLUNTARIAR" title="Transformando Vidas com Educação, Inclusão e Amor" description="Desde 1985, o Instituto de Educação Especial Diomício Freitas promove o desenvolvimento de jovens e adultos com deficiência intelectual e TEA, preparando-os para o mercado de trabalho e para o exercício da cidadania por meio da educação, do acolhimento e da inclusão."/>
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
        <section className="w-full bg-[#47A7FF] flex items-center justify-center flex-col gap-20 p-20 box-border">
            <h2 className="text-6xl ff-SourGummy-bold text-white">Capacitações</h2>
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-20"> 
                <CourseCard icon="/images/home/atividades/Embalador.svg" title="Embalador de Supermercado" text="Curso que ensina práticas de organização, atendimento e preparação de produtos para reposição. Desenvolve responsabilidade, atenção e postura profissional no ambiente comercial."></CourseCard>
                <CourseCard icon="/images/home/atividades/informatica.svg" title="Informática Básica" text="Capacitação em digitação, navegação na internet e ferramentas do pacote Office. Essencial para o desenvolvimento da autonomia digital e preparação para o mercado moderno."></CourseCard>
                <CourseCard icon="/images/home/atividades/artesanato.svg" title="Artesanato com Jornal" text="Transformação criativa de papel em itens como cestas e porta-retratos. Estimula a coordenação motora, senso estético e consciência ambiental por meio do reaproveitamento."></CourseCard>
                <CourseCard icon="/images/home/atividades/biscuit.svg" title="Biscuit e Cartões Decorativos" text="Oficinas práticas que envolvem modelagem em biscuit e criação de cartões. Promovem criatividade, foco e habilidades manuais, além de possibilitar geração de renda."></CourseCard>
                <CourseCard icon="/images/home/atividades/officeboy.svg" title="Office Boy e Girl" text="Curso voltado ao preparo para funções de apoio administrativo, com foco em responsabilidade, organização, comunicação e rotinas de entrega em empresas e instituições."></CourseCard>
            </article>
        </section>   
        <section className="p-10">
            <div className="text-center w-full p-10 text-6xl ff-SourGummy-bold text-[#FF7E1C]">
                Relatos
            </div>
            <div className="h-160">
                <Carroussel cards={cards}/>
            </div>
        </section>
        <section className="w-full flex items-center justify-center flex-col gap-10 px-20 pb-20 box-border">
            <div className="text-center w-full p-10 text-6xl ff-SourGummy-bold text-[#FF7E1C]">
                Nossas conquistas
            </div>
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-0 "> 
                <CourseCardConquistas icon="/images/home/conquistas/alunos.svg" title="+500 Alunos Atendidos" text="Mais de 500 jovens e adultos com deficiência intelectual já passaram pelo Instituto, recebendo educação, capacitação e acolhimento de qualidade."></CourseCardConquistas>
                <CourseCardConquistas icon="/images/home/conquistas/parcerias.svg" title="Parcerias que Geram Empregos" text="Através de alianças com empresas da região, dezenas de alunos conquistaram sua vaga no mercado de trabalho, promovendo autonomia e inclusão real."></CourseCardConquistas>
                <CourseCardConquistas icon="/images/home/conquistas/40anos.svg" title="Quase 40 Anos de História" text="Desde 1985, o Instituto é referência na educação especial em Criciúma, com uma trajetória marcada por dedicação, afeto e compromisso com a cidadania."></CourseCardConquistas>
            </article>
        </section>

        <section className="w-full flex items-center justify-center flex-col">
            <div className="w-full p-10 flex items-center justify-center flex-col">
                <h2 className="text-6xl text-center ff-SourGummy-bold text-[#FF7E1C]">Empresas parceiras</h2>
                <h3 className="text-1xl text-center ff-NunitoSans">Empresas que acreditam no poder da transformação social caminham ao nosso lado</h3>
            </div>
        </section>

        <ParceirosGrid></ParceirosGrid>

        <section className="w-full flex items-center justify-center flex-col mb-40 px-40">
            <p className="text-2xl text-wrap text-center mb-20 ff-SourGummy-bold ">
            Quando uma empresa estende a mão, uma vida inteira se transforma. 
            Ao se tornar nosso parceiro, você ajuda a incluir jovens e adultos 
            com deficiência intelectual no mercado de trabalho, oferecendo não 
            só oportunidades, mas dignidade, pertencimento e esperança.
            Junte-se a nós. Transforme seu impacto em inclusão real.</p>
            <span className="mb-5 text-[64px] ff-SourGummy-bold text-[#FF7E1C]">Se torne um parceiro!</span>
            <Button className="bg-[#BF9F58]">QUERO CONHECER!</Button>
        </section>
        
        <section className="p-50 flex items-center justify-around bg-gray-200">
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center">Seja um<br/>voluntário</span>
                <Button className="bg-[#FF7E1C]">QUERO ME VOLUNTARIAR</Button>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center text-[#866AFF]">Fale<br/>conosco</span>
                <Button className="bg-[#FF7E1C]">ENTRAR EM CONTATO</Button>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
                <span className="mb-5 text-6xl ff-SourGummy-bold text-center text-[#BF9F58]">Faça uma<br/>doação</span>
                <Button className="bg-[#FF7E1C]">QUERO DOAR!</Button>
            </div>
        </section>
    </>
 )   
}