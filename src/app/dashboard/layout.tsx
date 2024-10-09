import { Noto_Sans_Mono } from "next/font/google";
import ".././globals.css";
import Sidebar from "@/components/Sidebar";

const NotoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NotoSansMono.className}>
      <body>
          <Sidebar />

          {children}
      </body>
    </html>
  );
}
