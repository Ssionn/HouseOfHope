import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';
import './globals.css';

const NotoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'House of Hope'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NotoSansMono.className}>
      <body>{children}</body>
    </html>
  );
}
