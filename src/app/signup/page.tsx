import SignupForm from "@/components/SignupForm";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <span className="text-2xl font-semibold">Sign up</span>

      <div className="w-1/4 mt-12">
        <SignupForm />
      </div>
    </div>
  );
}
