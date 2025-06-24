import Image from "next/image"
import Link from "next/link"

interface Props {
  image?: string
  title: string
  description: string
  id: string
  created_at?: string
}

export default function CardNews({ image, title, description, id, created_at }: Props) {
  const formattedDate = created_at
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(created_at))
    : null

  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const imageUrl = image ? `${baseURL}/uploads/${image}` : "/images/image.png"
  console.log("URL da API:", imageUrl)
  console.log(id)

  return (
    <article className="rounded-2xl h-auto max-w-full flex flex-col items-center justify-start bg-gray-400">
      <Link href={`/noticias/${id}`} className="w-full">
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={`Imagem da notícia: ${title}`}
            fill
            className="object-cover rounded-t-2xl"
            unoptimized
          />
        </div>
        <div className="p-8 flex flex-col gap-3">
          <span className="ff-SourGummy-bold">{title}</span>
          <p className="ff-NunitoSans text-sm">{description}</p>
          {formattedDate && (
            <span className="text-xs text-gray-700 italic">
              Publicado em {formattedDate}
            </span>
          )}
        </div>
      </Link>
    </article>
  )
}