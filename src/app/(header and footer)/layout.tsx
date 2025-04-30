import Link from "next/link";

export default function RootLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
          <header className="h-[10dvh] w-full bg-sky-200 flex flex-row justify-between align-center p-5">
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
          <footer className="h-[10dvh] w-full bg-[#F2F2F2]  p-5">footer</footer>
      </body>
    </html>
  );
}