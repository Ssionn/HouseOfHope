import { Noto_Sans_Mono } from 'next/font/google';
import '.././globals.css';
import Sidebar from '@/components/Sidebar';

const NotoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={NotoSansMono.className}>
      <Sidebar />

      <div className="sm:ml-64 p-6">{children}</div>
    </div>
  );
}
