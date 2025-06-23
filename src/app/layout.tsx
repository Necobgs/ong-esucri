import '@/app/globals.css'

export default function RootLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
            {children}
      </body>
    </html>
  );
}