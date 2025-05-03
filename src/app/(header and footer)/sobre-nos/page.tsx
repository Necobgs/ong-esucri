import Link from "next/link"
import TextImage from "@/components/text-image/TextImage"
import Image from "next/image"

export default function SobreNos(){
    return (
        <>
            <section className="flex items-center justify-center flex-col p-25 bg-gray-200">
                <h1 className="ff-SourGummy-bold text-center text-6xl mb-10">Lorem ipsum dolor sit amet,<br/>consectetur</h1>
                <p className="ff-NunitoSans text-center w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
            </section>
            <section className="pl-80 pr-80 pt-80 pb-30">
                <ul className="w-full flex items-start justify-between">
                    <li><Link href="#nossasHistorias">Nossa história</Link></li>
                    <li><Link href="nossosObjetivos">Nossos objetivos</Link></li>
                    <li><Link href="#convenios">Convênios</Link></li>
                    <li><Link href="#voluntarios">Voluntários</Link></li>
                    <li><Link href="#diretoria">Diretoria</Link></li>
                    <li><Link href="#grupoDeMaes">Grupo de mães</Link></li>
                    <li><Link href="#parceiros">Parceiros</Link></li>
                </ul>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15" id="nossasHistorias">
                <TextImage image="image1" title="Nossas histórias" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu." direction="default"/>
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={100}
                    className="w-full max-h-100 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu. Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu. Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu. Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.</p>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="nossosObjetivos">
                <TextImage image="image2" title="Nossos objetivos" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu." direction="reverse"/>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="convenios">
                <TextImage direction="default" image="image2" title="Convênios" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."/>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-30" id="voluntarios">
                <TextImage direction="reverse" image="image2" title="Voluntários" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu."/>
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={100}
                    className="w-full max-h-100 rounded-2xl"
                    style={{objectFit:"cover"}}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu. Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.</p>
            </section>
            <section className="flex flex-col pl-80 pr-80 gap-15 pt-50 pb-30 justify-center items-center">
                <div className="w-1/4 items-center justify-center text-center">
                    Image
                </div>            
                <div className="flex flex-col justify-center items-center gap-10 w-3/4">
                    <span className="ff-SourGummy-bold text-5xl text-center">Lorem ipsum dolor sit amet, consectetur</span>
                    <p className="ff-NunitoSans text-1xl text-center w-2/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti. Aliquam massa libero, ullamcorper quis aliquam dignissim, tempus a massa. Cras sed sapien rhoncus, iaculis nunc lobortis, dapibus arcu.</p>
                </div>
                <button className="bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-3xl ff-SourGummy-bold">
                QUERO FAZER PARTE
                </button>
            </section>
        </>
    )
}