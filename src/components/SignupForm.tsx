"use client";

import { signup } from "@/Actions";
import { useFormState } from "react-dom";

export default function SignupForm() {
  const [state, formAction] = useFormState<any, FormData>(signup, undefined);

  return (
    <form action={formAction} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        name="firstname"
        required
        placeholder="First name"
        className="rounded p-2 w-full"
      />
      <input
        type="text"
        name="lastname"
        required
        placeholder="Last name"
        className="rounded p-2 w-full"
      />
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
        Sign up
      </button>

      {state?.error && (
        <span className="text-xs font-semibold text-red-500">
          {state.error}
        </span>
      )}
    </form>
  );
}
