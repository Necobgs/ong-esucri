"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import SlideProfession from "@/components/slide-profession/slide-profession"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardVolunteeringResult from "@/components/card-volunteering-result/card-volunteering-result";
import HeroSection from "@/components/hero-section/hero-section";
import LinhaIcones from "@/components/LinhaIcones/LinhaIcones";


export default function Voluntariado(){

    const slideProfessions = [
        {
            image:"/images/image.png",
            title:"Embalador de Supermercado",
            description:'O curso de Embalador de Supermercado prepara o educando para atuar diretamente no atendimento ao cliente, organizando e embalando produtos com atenção, higiene e cuidado. A formação contempla habilidades sociais e técnicas que favorecem a inclusão no mercado formal.',
            details:[
                {icon:'🛒',title:'Atendimento ao cliente',subtitle:'Interações respeitosas e claras com o público.'},
                {icon:'📦',title:'Organização e agilidade',subtitle:'Rapidez e precisão na separação e embalagem de produtos.'},
                {icon:'♻️',title:'Consciência ambiental',subtitle:'Uso responsável de sacolas e incentivo à reciclagem.'},
                {icon:'🤝',title:'Trabalho em equipe',subtitle:'Colaboração com outros setores do supermercado.'}
            ]
        },
        {
            image:"/images/image.png",
            title:"Office Boy / Office Girl",
            description:'Neste curso, o aluno desenvolve competências para realizar atividades de apoio administrativo, como entrega de documentos, atendimento interno e organização de arquivos. O objetivo é fomentar senso de responsabilidade e iniciativa profissional.',
            details:[
                {icon:'📝',title:'Rotinas administrativas',subtitle:'Apoio básico a setores internos de empresas.'},
                {icon:'🧭',title:'Orientação e locomoção urbana',subtitle:'Autonomia para circular pela cidade com segurança.'},
                {icon:'⏱',title:'Gestão de tempo e prazos',subtitle:'Entregas e tarefas feitas com pontualidade.'},
                {icon:'📬',title:'Responsabilidade com documentos',subtitle:'Manuseio e entrega com atenção e sigilo.'}
            ]
        },
        {
            image:"/images/image.png",
            title:"Informática Básica",
            description:'O curso de Informática Básica capacita o educando para utilizar o computador como ferramenta de trabalho e inclusão social. Ensina desde o manuseio do mouse até o uso de programas como Word, Excel e navegação na internet.',
            details:[
                {icon:'💻',title:'Conhecimento dos componentes',subtitle:'Aprendizado sobre o uso do computador e periféricos.'},
                {icon:'🧠',title:'Raciocínio lógico e concentração',subtitle:'Desenvolvimento cognitivo com atividades digitais.'},
                {icon:'📊',title:'Ferramentas do dia a dia',subtitle:'Uso básico de Word, Excel e outros programas.'},
                {icon:'🌐',title:'Autonomia digital',subtitle:'Navegação responsável na internet e uso de e-mail.'}
            ]
        }
    ]

    return (
        <>
            <section className="flex flex-col pl-40 pr-40 pt-10 gap-15 pb-10">
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={200}
                    className="w-full max-h-80 rounded-2xl bg-[#ECECEC]"
                    style={{objectFit:"contain"}}
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
                    Doe seu tempo, transforme vidas.
                    </h1>
                </div>
                <div className="w-2/5">
                    <p className="w-full h-full">No Instituto Diomício Freitas, cada voluntário 
                    é uma peça fundamental na construção de um mundo mais justo e inclusivo. Ao 
                    dedicar seu tempo, carinho e talento, você contribui diretamente para o 
                    desenvolvimento de jovens e adultos com deficiência intelectual, promovendo autonomia, 
                    dignidade e cidadania. <br/><br/><b>Seja em oficinas, eventos, reciclagem ou apoio pedagógico — aqui, toda ajuda importa.</b>
                    </p>
                </div>
                <div className="flex items-center justify-center w-1/5">
                <Image
                    src="/images/image.png"
                    alt="Imagem"
                    width={800}
                    height={100}
                    className="w-full max-h-100 rounded-2xl bg-[#ECECEC]"
                    style={{objectFit:"contain"}}
                />
                </div>
            </section>
            <section className="px-4 sm:px-10 lg:px-22 pt-20">
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop={true}
            >
                {slideProfessions.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SlideProfession {...slide}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        <section className="pl-40 pr-40 pt-30 flex items-center flex-col justify-center gap-10 mb-20">
            <h2 className="text-center ff-SourGummy-bold text-5xl">Resultados do Voluntariado</h2>
            <div className="grid grid-cols-3 gap-5">
            <CardVolunteeringResult
                image="/images/image.png"
                title="Evento 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti."
                direction="col"
            />
            <CardVolunteeringResult
                image="/images/image.png"
                title="Evento 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti."
                direction="col"
            />
            <CardVolunteeringResult
                image="/images/image.png"
                title="Evento 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti."
                direction="col"
            />
            <CardVolunteeringResult
                image="/images/image.png"
                title="Evento 4"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed, scelerisque id ante. In sagittis nec est vitae pellentesque. Suspendisse potenti."
                direction="row"
            />
            </div>
        </section>
        <HeroSection
            iconeSrc="/icons/vetor-parcerias.svg"
            titulo="Quero me voluntariar!"
            descricao="Você pode fazer a diferença na vida de dezenas de jovens e adultos com 
            deficiência intelectual. Seja doando seu tempo, suas habilidades ou apenas sua 
            presença. Venha conhecer o Instituto e descubra como seu apoio pode transformar 
            histórias.
            Entre em contato ou venha nos visitar!"
            botaoTexto="TORNAR-SE UM PARCEIRO"
        />

        <section className="mb-20"><LinhaIcones></LinhaIcones></section>
        </>
    )
}