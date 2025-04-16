import { signOut } from "@logto/next/server-actions";
import { logtoConfig } from "@/app/logto";

export default function SignOut() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signOut(logtoConfig);
      }}
      className="text-gray-800 bg-gray-800 dark:text-white hover:bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
      Sign Out
    </button>
  );
}
