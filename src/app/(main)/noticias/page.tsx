"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardNews from "@/components/card-news/card-news";


export default function Noticias(){

    const last_news = [
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        }
    ]

    const most_acess_news = [
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        },
        {
            id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
            title:'Arrecadação no semáforo',
            description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
            image:'/images/image.png'
        }
    ]

    return (
        <>
            <section className="flex items-center justify-center p-30">
                <h1 className="ff-SourGummy-bold text-center text-6xl">
                    Noticias
                </h1>
            </section>
            <section className="p-15 ml-15 mr-15">
                <div className="w-full mb-10">
                    <h2 className="text-start ff-SourGummy text-2xl ">Ultimas noticias</h2>
                </div>
                <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    loop={true}
                >
                    {last_news.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <CardNews {...slide}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </section>
            <section className="p-15 ml-15 mr-15">
                <div className="w-full mb-10">
                    <h2 className="text-start ff-SourGummy text-2xl ">Ultimas noticias</h2>
                </div>
                <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    loop={true}
                >
                    {most_acess_news.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <CardNews {...slide}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </section>
        </>
    )
}