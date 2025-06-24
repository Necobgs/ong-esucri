"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import CardNews from "@/components/card-news/card-news"
import { useEffect, useState } from 'react'
import { api } from '@/services/api'

interface Notice {
  id: string
  title: string
  description: string
  notice_text: string
  image?: string
  created_at: string
  view: number
}

export default function Noticias() {
  const [lastNews, setLastNews] = useState<Notice[]>([])
  const [mostViewed, setMostViewed] = useState<Notice[]>([])
  const baseURL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    console.log('bbbbbbbb')
    api.get('/notice')
    .then((response)=>{
        console.log('aaaaaaaaaaaa')
        console.log(response.data)
        setMostViewed(response.data)})
    .catch((error)=>{
        console.log('deu ruim')
        console.log(error)
    })

    api.get('/notice',{
        params:{
            order:'DESC',
            sortBy:'created_at'
        }})
    .then((response)=>setLastNews(response.data))

}, [])

    console.log(mostViewed)
    console.log('---------')
    console.log(lastNews)
  return (
    <>
      <section className="flex items-center justify-center p-30">
        <h1 className="ff-SourGummy-bold text-center text-6xl">
          Notícias
        </h1>
      </section>

      {/* Últimas notícias */}
      <section className="p-15 ml-15 mr-15">
        <div className="w-full mb-10">
          <h2 className="text-start ff-SourGummy text-2xl">Últimas notícias</h2>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {lastNews.map((notice) => (
              <SwiperSlide key={notice.id}>
                <CardNews
                  id={notice.id}
                  title={notice.title}
                  description={notice.description}
                  image={notice.image}
                  created_at={notice.created_at}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Mais acessadas */}
      <section className="p-15 ml-15 mr-15">
        <div className="w-full mb-10">
          <h2 className="text-start ff-SourGummy text-2xl">Mais acessadas</h2>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            loop={true}
          >
            {mostViewed.map((notice) => (
              <SwiperSlide key={notice.id + "-view"}>
                <CardNews
                  id={notice.id}
                  title={notice.title}
                  description={notice.description}
                  image={notice.image}
                  created_at={notice.created_at}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
