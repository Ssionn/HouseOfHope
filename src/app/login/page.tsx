import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <span className="text-2xl font-semibold">Login</span>

      <div className="w-1/4 mt-12">
        <LoginForm />
      </div>
    </div>
  );
}
