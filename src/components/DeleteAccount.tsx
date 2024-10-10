export default function DeleteAccount() {
    return (
        <div className="max-w-2xl mx-auto bg-white p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-red-600">Delete Account</h2>
            <p className="font-style: italic text-sm mb-4 opacity-60">Verwijder account: Zodra je account is verwijderd, zullen al zijn bronnen en gegevens permanent worden verwijderd. Voordat je je account verwijdert, download alstublieft de gegevens of informatie die je wilt behouden.</p>
            <button className="bg-red-500 hover:bg-red-600 border-solid border-[1px] border-black text-sm text-white rounded-lg px-4 py-1.5">
            Delete Account
            </button>
        </div>
    );
}