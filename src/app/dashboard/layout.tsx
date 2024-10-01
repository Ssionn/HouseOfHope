import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import ".././globals.css";
import Sidebar from "@/components/Sidebar";
import { getSession } from "@/Actions";
import { redirect } from "next/navigation";

const NotoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "House of Hope",
  creator: "House of Hope - Team",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (!session.isLoggedIn === true) {
    redirect("/login");
  }

  return (
    <html lang="en" className={NotoSansMono.className}>
      <body className="">
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
