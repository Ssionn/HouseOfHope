import { Noto_Sans_Mono } from "next/font/google";
import ".././globals.css";
import Sidebar from "@/components/Sidebar";
import { getSessionAsPlainObject } from "../../../actions/authentication";
import { NextResponse } from "next/server";

const NotoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSessionAsPlainObject();

  if (!session.isLoggedIn) {
    new NextResponse("/login");
  }

  return (
    <div className={NotoSansMono.className}>
      <Sidebar />
      {children}
    </div>
  );
}
