import { monserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>{children}
        <footer className='py-4 flex justify-center items-center'>
          Hecho con ♥️ por Oussama Atifi
        </footer>
      </body>
    </html>
  );
}
