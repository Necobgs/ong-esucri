import Image from "next/image";
import CourseCard from "@/components/course-card/course-card";
import Carroussel from "@/components/carrossel/Carroussel";

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
       <section className="min-h-[100dvh] w-full flex flex-col justify-around pt-[5%] pl-[10%] pr-[10%]">
        <article className="flex justify-around items-center gap-[10%] w-full h-[80vh]">
            <div className="w-[50%] flex gap-[50px] flex-col">
            <h1 className="font-bold text-[64px] text-amber-400 ff-SourGummy">
                Lorem ipsum dolor sit amet, consectetur
            </h1>
            <p className="font-medium text-[16px] ff-NunitoSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
                neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec
                est vitae pellentesque. Suspendisse potenti. Aliquam massa libero,
                ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien
                rhoncus, iaculis nunc lobortis, dapibus arcu.
            </p>
            <div className="flex justify-center items-center gap-6 text-white">
                <button className="bg-[#866AFF] p-3 rounded-3xl">
                QUERO ME VOLUNTARIAR
                </button>
                <button className="bg-[#866AFF] p-3 rounded-3xl">
                QUERO FAZER UMA DOAÇÃO
                </button>
            </div>
            </div>
            <div className="w-[40%] h-[500px] relative">
            <Image
                src="/images/image.png"
                alt="Imagem"
                fill
                style={{objectFit:"cover"}}
                priority
            />
            </div>
        </article>
        <div className="flex items-center justify-center gap-10 w-full">
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
        </div>
    </section>
        <section className="h-[60dvh] w-full bg-amber-400 flex items-center justify-center flex-row mt-10 mb-10 gap-20">
            <div className="text-center w-1/4 text-3xl rounded-t-full rounded-br-full bg-amber-200 h-3/4 flex items-center justify-center">Frase motivadora</div>
            <div className="w-2/4">
                <h2 className="text-6xl">Sobre o instituto</h2>  
                <p className="text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
            </div>
        </section>
        <section className="w-full flex items-center justify-center flex-col gap-20 mt-20 mb-20">
            <h2 className="text-6xl">Missão, Visão e Valores</h2>
            <article className="flex flex-row w-3/4 gap-20">
                <p className="w-1/3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
                <p className="w-1/3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
                <p className="w-1/3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
            </article>
            <span className="flex items-center justify-center flex-col gap-5">
                <p className="text-center text-3xl">Nossa história completa</p>
                <button className="rounded-3xl bg-[#866AFF] pt-2 pb-2 pl-4 pr-4 text-white">Quero conhecer</button>
            </span>

        </section>
        <section className="w-full bg-sky-300 flex items-center justify-center flex-col gap-20 p-20 box-border">
            <h2 className="text-6xl">Nossos cursos</h2>
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-20"> 
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
            </article>
        </section>   
        <section className="p-10">
            <div className="text-center w-full p-10 text-6xl">
                Relatos
            </div>
            <div className="h-160">
                <Carroussel cards={cards}/>
            </div>
        </section>
        <section className="w-full flex items-center justify-center flex-col gap-20 p-20 box-border">
            <div className="text-center w-full p-10 text-6xl">
                Nossas conquistas
            </div>
            <div className="h-160">
            <article className="flex flex-wrap justify-center gap-x-30 gap-y-20"> 
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
                <CourseCard icon="icon de exemplo" title="Lorem Ipsum dolor Sit" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."></CourseCard>
            </article>
            </div>
        </section>
        <section className="w-full flex items-center justify-center flex-col p-20 box-border">
            <div className="w-full p-10 flex items-center justify-center flex-col mb-20">
                <h2 className="text-6xl text-center">Empresas parceiras</h2>
                <h3 className="text-1xl text-center text-gray-400">Lorem ipsum dolor sit amet, consectetur</h3>
            </div>
            <div className="flex items-center justify-around w-10/12 mb-20">
                <span>icon 1</span>
                <span>icon 2</span>
                <span>icon 3</span>
                <span>icon 4</span>
                <span>icon 5</span>
                <span>icon 6</span>
                <span>icon 7</span>
            </div>
            <p className="text-2xl text-wrap text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Fusce mi neque, finibus quis luctus sed, </p>
            <span className="mb-5 text-2xl">Se torne um parceiro!</span>
            <button className="bg-black p-3 rounded-3xl text-white">
                QUERO CONHECER!
            </button>
        </section>
    </>
 )   
}