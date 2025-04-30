import Image from "next/image"

export default function Voluntariado(){
    return (
        <>
            <section className="flex flex-col pl-40 pr-40 pt-40 gap-15 pb-10">
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={200}
                    className="w-full max-h-120 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <div className="w-full flex justify-between items-center">
                    <span>Lorem ipsum </span>
                    <span>Lorem ipsum </span>
                    <span>Lorem ipsum </span>
                </div>
            </section>
            <section className="pl-40 pr-40 pt-20 flex gap-10">
                <div className="w-1/3 flex flex-col items-start justify-around">
                    <button className="bg-black text-white pl-3 pr-3 pt-2 pb-2 rounded-3xl ff-SourGummy-bold max-w-50">
                        QUERO FAZER PARTE
                    </button>
                    <h1 className="ff-SourGummy-bold text-5xl">
                    Lorem Ipsum Dolor sit amet
                    </h1>
                </div>
                <div className="w-2/5">
                    <p className="w-full h-full">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.</p>
                </div>
                <div className="flex items-center justify-center w-1/5">
                    img
                </div>
            </section>
            <section className="pl-40 pr-40 pt-20 flex gap-5 items-start justify-start">
                <Image
                        src="/images/image.png"
                        alt="Imagem"
                        width={800}
                        height={200}
                        className="w-1/2 h-full"
                        style={{objectFit:"cover"}}
                        priority
                    />
                    <div className="box-border pr-15 pl-15 w-1/2 flex flex-col gap-10 h-full">
                        <h2 className="ff-SourGummy-bold text-3xl">Profissão exemplo</h2>
                        <p className="ff-NunitoSans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
                        <div className="w-full grid-cols-2 grid gap-5">
                            <div className="flex items-center justify-between">
                                <span>img</span>
                                <div>
                                    <h3 className="ff-SourGummy-bold text-1xl">Lorem Ipsum Dolor</h3>
                                    <p className="ff-NunitoSans text-xs">Lorem Ipsum Dolor</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>img</span>
                                <div>
                                    <h3 className="ff-SourGummy-bold text-1xl">Lorem Ipsum Dolor</h3>
                                    <p className="ff-NunitoSans text-xs">Lorem Ipsum Dolor</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>img</span>
                                <div>
                                    <h3 className="ff-SourGummy-bold text-1xl">Lorem Ipsum Dolor</h3>
                                    <p className="ff-NunitoSans text-xs">Lorem Ipsum Dolor</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>img</span>
                                <div>
                                    <h3 className="ff-SourGummy-bold text-1xl">Lorem Ipsum Dolor</h3>
                                    <p className="ff-NunitoSans text-xs">Lorem Ipsum Dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}