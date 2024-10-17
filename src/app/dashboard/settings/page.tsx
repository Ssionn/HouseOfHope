import DeleteAccount from "@/components/DeleteAccount";
import ProfileInformation from "@/components/ProfileInformation";
import UpdatePassword from "@/components/UpdatePassword";
import UpdateEmail from "@/components/UpdateEmail";

export default function Settings() {
  return (
    <main>
      <div className="min-h-screen bg-white p-6">  
        <ProfileInformation/>    
        <UpdateEmail/>
        <UpdatePassword/>
        <DeleteAccount/>
      </div>
    </main>
  );
}