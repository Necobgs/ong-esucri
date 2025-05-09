
import { useEffect } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function fetchNews(id: string) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    cache: 'no-store',
  });
  if (!response.ok) return null;
  return response.json();
}

export default async function NewsPage({ params }: { params: { id: string } }) {
//   const news = await fetchNews(params.id);
const news = {
        id:'j6kl4j6k5-fj6m4h6k=b4bjfjrh',
        title:'Arrecadação no semáforo',
        description:'Empenhados para mostrar nosso trabalho nas ruas, com gratidão nos olhos',
        image:'/images/image.png',
        views:15
    }

  if (!news) {
    notFound();
  }

//   useEffect(() => {
//     const viewedNews = JSON.parse(localStorage.getItem('viewedNews') || '[]');
//     if (!viewedNews.includes(params.id)) {
//       fetch(`http://localhost:3000/posts/${params.id}/views`, {
//         method: 'PATCH',
//       });
//       viewedNews.push(params.id);
//       localStorage.setItem('viewedNews', JSON.stringify(viewedNews));
//     }
//   }, [params.id]);

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