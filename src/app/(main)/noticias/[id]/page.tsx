import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function NewsPage({ params }: { params: { id: string } }) {
  // const news = await fetchNews(params.id);
  const news = {
    id: 'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
    title: 'Arrecadação no semáforo',
    description: 'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
    image: '/images/image.png',
    views: 15,
  };

  if (!news) {
    notFound();
  }

  return (
    <div className="pl-30 pr-30 pt-15 pb-15">
      <h1 className="ff-SourGummy-bold text-4xl">{news.title}</h1>
      <Image
        src={news.image || '/images/image.png'}
        alt={news.title}
        width={800}
        height={400}
        className="w-full h-96 object-cover rounded-2xl mt-4"
      />
      <p className="ff-NunitoSans mt-15">{news.description || 'Sem descrição'}</p>
    </div>
  );
}
