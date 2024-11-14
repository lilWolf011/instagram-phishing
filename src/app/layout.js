import { Roboto } from "next/font/google"
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  //👇 Add variable to our object
  variable: '--font-roboto',
})

export const metadata = {
  title: "Instagram",
  description: "Bir hesap oluştur veya Instagram'da giriş yap. Nelerle ilgilendiğini seni anlayan kişilerle paylaş.",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
