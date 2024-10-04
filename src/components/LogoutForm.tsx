import { logout } from "@/Actions";

export default function LogoutForm() {
  return (
    <form action={logout}>
      <button className="underline font-semibold text-lg">Uitloggen</button>
    </form>
  );
}
