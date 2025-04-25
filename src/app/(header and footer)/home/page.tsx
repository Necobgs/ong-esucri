import Image from "next/image";

export default function Home(){
 return (
    <>
        <section className="h-[100dvh] w-full flex justify-around pt-[5%] pl-[10%] pr-[10%] flex-col">
            <article className="flex justify-around items-center gap-[10%] w-full h-[80%]">
                <div className="w-[50%] flex gap-[50px] flex-col ">
                    <h1 className="font-bold text-[64px] text-amber-400">Lorem ipsum dolor sit amet, consectetur</h1>
                    <p className="font-medium text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
                    <div className="flex justify-center items-center gap-6 text-white">
                        <button className="bg-[#866AFF] p-3 rounded-3xl">QUERO ME VOLUNTARIAR</button>
                        <button className="bg-[#866AFF] p-3  rounded-3xl">QUERO FAZER UMA DOAÇÃO</button>
                    </div>
                </div>
                <div className="w-[40%] h-[100%] relative">
                    <Image
                    src="/images/image.png"
                    alt="Image"
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
            </article>
            <div>   

            </div>
        </section>
        <section className="h-[60dvh] w-full bg-amber-400 flex items-center justify-center flex-row mt-10 mb-10 gap-20">
            <div className="w-1/4 text-3xl rounded-t-full rounded-br-full bg-amber-200 h-3/4 flex items-center justify-center">Frase motivadora</div>
            <div className="w-2/4">
                <h2 className="text-[6vw]">Sobre o instituto</h2>  
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
        <section className="h-[100dvh] w-full bg-sky-300 flex items-center justify-center flex-col">
            <h2>Nossos cursos</h2>
            <article className="grid items-center justify-center grid-cols-3"> 
                <div>a</div>
                <div>b</div>
                <div>c</div>
                <div className="col-span-3 grid grid-cols-2">
                    <div>d</div>
                    <div>e</div>
                </div>
            </article>
            
        </section>   
    </>
 )   
}