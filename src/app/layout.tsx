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
          <header className="h-[10dvh] w-full bg-[#F2F2F2] flex flex-row justify-between align-center p-5 ff-NunitoSans-Medium">
            <div className="flex items-center justify-center">
                {/* <img src="" alt="" /> */}
                logotipo
            </div>
            <ul className="flex flex-row gap-10 items-center justify-center">
                <li><Link href="/">Página inicial</Link></li>
                <li><Link href="/cursos">Cursos</Link></li>
                <li><Link href="/parcerias">Parcerias</Link></li>
                <li><Link href="/voluntariado">Voluntariado</Link></li>
                <li><Link href="/noticias">Noticias</Link></li>
                <li><Link href="/sobre-nos">Sobre nós</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
            <div className="flex items-center justify-center">
                <Button className="bg-[#BF9F58]">Faça uma doação</Button>
            </div>
          </header>
          <main className="min-h-[90dvh] bg-[#F2F2F2]">
            {children}
          </main>
          <footer className="h-[10dvh] w-full bg-[#9b85ff] p-60 flex items-center justify-between">
            <div className="flex flex-col items-start justify-around w-1/4 gap-5">
              <h4 className="ff-SourGummy-bold text-6xl text-start">Rodapé</h4>
              <p className="ff-NunitoSans text-start">Acompanhe nosso trabalho e faça parte da transformação.
                                                      Juntos, podemos levar esperança, dignidade e novas oportunidades para quem mais precisa.</p>
                <div className="flex items-center justify-around gap-15">
                  <div className="flex items-center justify-center gap-5">
                      <div className="w-10 h-10">            
                        <img
                          src="/icons/instagram.svg"
                          alt="Imagem Instagram"
                        />
                      </div>
                      <div>
                          <p className="ff-NunitoSans-bold">@ieeddiomicio</p>
                      </div>
                  </div>
                </div>
            </div>
            <Image
                src="/icons/casa.svg"
                alt="Imagem"
                width={800}
                height={200}
                className="w-1/4 rounded-2xl"
                style={{objectFit:"cover"}}
            />
          </footer>
      </body>
    </html>
  );
}