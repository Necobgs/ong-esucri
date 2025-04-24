import Image from "next/image";

export default function Home(){
 return (
    <>
        <section className="h-[100dvh] w-full flex justify-around pt-[5%] pl-[10%] pr-[10%] flex-col">
            <article className="flex justify-around items-center gap-[10%] w-full h-[80%] bg-sky-200">
                <div className="w-[50%] flex gap-[50px] flex-col ">
                    <h1 className="font-bold text-[64px]">Lorem ipsum dolor sit amet, consectetur</h1>
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
                    // width={100}
                    // height={100}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
            </article>
            <div>   

            </div>
        </section>
        <section className="h-[100dvh] w-full">

        </section>
        <section className="h-[100dvh] w-full">

        </section>
        <section className="h-[100dvh] w-full">
            
        </section>   
    </>
 )   
}