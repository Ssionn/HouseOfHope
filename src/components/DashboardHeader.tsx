import { getSession } from "@/Actions";
import { redirect } from "next/navigation";

export default async function DashboardHeader() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="inline-flex">
      <h1 className="text-4xl font-bold">Welcome,&nbsp;</h1>
      <span className="text-4xl">{session?.firstname}</span>
    </div>
  );
}
