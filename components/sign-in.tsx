import { signIn } from "@logto/next/server-actions";
import { logtoConfig } from "@/app/logto";

export default function SignIn() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn(logtoConfig);
      }}
      className="text-gray-800 cursor-auto bg-blue-500 dark:text-white hover:bg-blue-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
      Sign In
    </button>
  );
}
