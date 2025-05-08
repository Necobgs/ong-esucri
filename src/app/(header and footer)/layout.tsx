import Link from "next/link";
import Image from "next/image";


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
                <li><Link href="/home">Página inicial</Link></li>
                <li>Cursos</li>
                <li>Parcerias</li>
                <li><Link href="/voluntariado">Voluntariado</Link></li>
                <li><Link href="/sobre-nos">Sobre nós</Link></li>
            </ul>
            <div className="flex items-center justify-center">
                <button>Faça uma doação</button>
            </div>
          </header>
          <main className="min-h-[90dvh] bg-[#F2F2F2]">
            {children}
          </main>
          <footer className="h-[10dvh] w-full bg-gray-400 p-60 flex items-center justify-between">
            <div className="flex flex-col items-start justify-around w-1/4 gap-5">
              <h4 className="ff-SourGummy-bold text-6xl text-start">Rodapé</h4>
              <p className="ff-NunitoSans text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi neque, finibus quis luctus sed.</p>
                <div className="flex items-center justify-around gap-15">
                  <div className="flex items-center justify-center gap-5">
                      <div>image</div>
                      <div>
                          <p className="ff-NunitoSans">Lorem ipsum</p>
                      </div>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                      <div>image</div>
                      <div>
                          <p className="ff-NunitoSans">Lorem ipsum</p>
                      </div>
                  </div>
                </div>
            </div>
            <Image
                src="/images/image.png"
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