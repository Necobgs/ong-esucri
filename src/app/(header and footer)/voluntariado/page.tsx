"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import SlideProfession from "@/components/slide-profession/slide-profession"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardVolunteeringResult from "@/components/card-volunteering-result/card-volunteering-result";


export default function Voluntariado(){

    const slideProfessions = [
        {
            image:"/images/image.png",
            title:"Profissão 1",
            description:'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.',
            details:[
                {icon:'icon1',title:'title example 1',subtitle:'subtitle1'},
                {icon:'icon2',title:'title example 2',subtitle:'subtitle2'},
                {icon:'icon3',title:'title example 3',subtitle:'subtitle3'},
                {icon:'icon4',title:'title example 4',subtitle:'subtitle4'}
            ]
        },
        {
            image:"/images/image.png",
            title:"Profissão 2",
            description:'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.',
            details:[
                {icon:'icon1',title:'title example 1',subtitle:'subtitle1'},
                {icon:'icon2',title:'title example 2',subtitle:'subtitle2'},
                {icon:'icon3',title:'title example 3',subtitle:'subtitle3'},
                {icon:'icon4',title:'title example 4',subtitle:'subtitle4'}
            ]
        },
        {
            image:"/images/image.png",
            title:"Profissão 3",
            description:'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.',
            details:[
                {icon:'icon1',title:'title example 1',subtitle:'subtitle1'},
                {icon:'icon2',title:'title example 2',subtitle:'subtitle2'},
                {icon:'icon3',title:'title example 3',subtitle:'subtitle3'},
                {icon:'icon4',title:'title example 4',subtitle:'subtitle4'}
            ]
        }
    ]

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
                        <SlideProfession {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        <section className="pl-40 pr-40 pt-30 flex items-center flex-col justify-center gap-10">
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