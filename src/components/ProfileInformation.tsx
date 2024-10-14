export default function ProfileInformation() {
  return (
    <div className="mb-8 max-w-2xl mx-auto bg-white p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          id="username"
          className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm"
          placeholder="Username"
        />
        <input
          type="email"
          id="email"
          className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm"
          placeholder="Email"
        />
      </div>
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-600 border-solid border-[1px] border-black text-white rounded-lg px-6 py-1">
          <span className="text-sm">Save</span>
        </button>
      </div>
    </div>
  );
}
