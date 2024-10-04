import { getSession } from "@/Actions";
import Header from "./Header";

export default async function DashboardHeader() {
  const session = await getSession();

  return <Header title="Welkom,&nbsp;" subtitle={session?.firstname} />;
}
