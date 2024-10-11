export default function UpdatePassword() {
  return (
    <div className="mb-8 max-w-2xl mx-auto bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Update Password</h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="password"
          id="new-password"
          className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm"
          placeholder="Enter new password"
        />
        <input
          type="password"
          id="confirm-password"
          className="p-2 w-full rounded-md border-solid border-[1px] border-gray-200 placeholder:text-sm"
          placeholder="Confirm new password"
        />
      </div>

      <div className="mt-3">
        <button className="bg-green-500 hover:bg-green-600 border-solid border-[1px] border-black text-white rounded-lg px-6 py-1">
          <span className="text-sm">Save</span>
        </button>
      </div>
    </div>
  );
}
