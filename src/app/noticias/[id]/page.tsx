"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"

interface Notice {
  id: string
  title: string
  description: string
  notice_text: string
  image?: string
  created_at: string
  view: number
}

export default function NewsPage() {
  const { id } = useParams()
  const [news, setNews] = useState<Notice | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notice/${id}`, {
          cache: "no-store",
        })
        if (!res.ok) {
          setNews(null)
        } else {
          const data = await res.json()
          setNews(data)
        }
      } catch (err) {
        console.error("Erro ao carregar notícia:", err)
        setNews(null)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchNews()
  }, [id])

  if (loading) return <p className="p-10">Carregando...</p>
  if (!news) return notFound()

  const imageURL = news.image?.startsWith("http")
    ? news.image
    : `${process.env.NEXT_PUBLIC_API_URL}/uploads/${news.image}`
  
    console.log(imageURL)
    console.log("-----------------------------------------")
  return (
    <div className="pl-30 pr-30 pt-15 pb-15">
      <h1 className="ff-SourGummy-bold text-4xl">{news.title}</h1>

      <Image
        src={imageURL}
        alt={news.title}
        width={800}
        height={400}
        className="w-full h-96 object-cover rounded-2xl mt-4"
      />

      <p className="ff-NunitoSans mt-10 text-lg text-gray-800">
        {news.description || "Sem descrição"}
      </p>

      <div className="ff-NunitoSans mt-8 text-base whitespace-pre-line leading-relaxed">
        {news.notice_text}
      </div>
    </div>
  )
}
