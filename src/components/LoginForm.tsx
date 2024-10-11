"use client";

import { login } from "../../actions/authentication";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formAction} className="flex flex-col items-center space-y-4">
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="rounded p-2 w-full"
      />
      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        className="rounded p-2 w-full"
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Log in
      </button>

      {state?.error && (
        <span className="text-xs font-semibold text-red-500">
          {state.error}
        </span>
      )}
    </form>
  );
}
