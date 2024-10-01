import DashboardHeader from "@/components/DashboardHeader";
import UserDropdown from "@/components/UserDropdown";

export default function Home() {
  return (
    <div>
      <main className="ml-60 p-6">
        <div className="flex justify-between items-center">
          <DashboardHeader />
          <UserDropdown />
        </div>

        <div className="mt-12"></div>
      </main>
    </div>
  );
}
