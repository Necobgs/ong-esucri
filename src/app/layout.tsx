import Link from "next/link";
import Image from "next/image";
import '@/app/globals.css'
import Button from "@/components/Button/Button";

export default function RootLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="h-auto md:h-[10dvh] w-full bg-[#F2F2F2] flex flex-col md:flex-row justify-between items-center px-5 py-4 ff-NunitoSans-Medium gap-4">
          <div className="flex items-center justify-center">
            {/* <img src="" alt="" /> */}
            logotipo
          </div>

          <ul className="flex flex-wrap md:flex-row gap-4 md:gap-6 items-center justify-center text-center text-sm md:text-base">
            <li><Link href="/">Página inicial</Link></li>
            <li><Link href="/cursos">Cursos</Link></li>
            <li><Link href="/parcerias">Parcerias</Link></li>
            <li><Link href="/voluntariado">Voluntariado</Link></li>
            <li><Link href="/noticias">Notícias</Link></li>
            <li><Link href="/sobre-nos">Sobre nós</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>

          <div className="flex items-center justify-center">
            <Button className="bg-[#BF9F58]">Faça uma doação</Button>
          </div>
        </header>

        <main className="min-h-[80vh] bg-[#F2F2F2] px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="w-full bg-[#9b85ff] px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-4 max-w-lg text-center lg:text-left">
            <h4 className="ff-SourGummy-bold text-3xl md:text-5xl">Rodapé</h4>
            <p className="ff-NunitoSans">
              Acompanhe nosso trabalho e faça parte da transformação. <br />
              Juntos, podemos levar esperança, dignidade e novas oportunidades para quem mais precisa.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <img
                  src="/icons/instagram.svg"
                  alt="Imagem Instagram"
                  className="w-full h-full"
                />
              </div>
              <p className="ff-NunitoSans-bold">@ieeddiomicio</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <Image
              src="/icons/casa.svg"
              alt="Imagem"
              width={800}
              height={200}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
