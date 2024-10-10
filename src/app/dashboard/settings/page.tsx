import DeleteAccount from "@/components/DeleteAccount";
import ProfileInformation from "@/components/ProfileInformation";
import UpdatePassword from "@/components/UpdatePassword";

export default function Settings() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100 p-6">  

        <ProfileInformation/>      
        <UpdatePassword/>
        <DeleteAccount/>

      </div>
    </main>
  );
}

