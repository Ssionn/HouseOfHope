export default function Settings() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100 p-6">  
        <div className="mb-8 max-w-2xl mx-auto bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

          <div className="flex flex-col items-center space-y-4">
            <input type="text" id="username" className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm" placeholder="Username"/>
            <input type="email"id="email" className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm" placeholder="Email"/>
          </div>
          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 border-solid border-[1px] border-black text-white rounded-lg px-6 py-1">
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>

        <div className="mb-8 max-w-2xl mx-auto bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Update Password</h2>

          <div className="flex flex-col items-center space-y-4">
            <input type="password" id="new-password" className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm" placeholder="Enter new password"/>
            <input type="password" id="confirm-password" className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm" placeholder="Confirm new password"/>
          </div>  

          <div className="mt-3">
            <button className="bg-green-500 hover:bg-green-600 border-solid border-[1px] border-black text-white rounded-lg px-6 py-1">
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Delete Account</h2>
          <p className="font-style: italic text-sm mb-4 opacity-60">Verwijder account: Zodra je account is verwijderd, zullen al zijn bronnen en gegevens permanent worden verwijderd. Voordat je je account verwijdert, download alstublieft de gegevens of informatie die je wilt behouden.</p>
          <button className="bg-red-500 hover:bg-red-600 border-solid border-[1px] border-black text-sm text-white rounded-lg px-4 py-1.5">
            Delete Account
          </button>
        </div>
      </div>
    </main>
  );
}

