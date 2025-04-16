import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "@/app/logto";

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (isAuthenticated === true) {
    const { username } = claims;
    return (
      <div className="mx-auto container  px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          <h1 className="mb-4 text-xl font-bold md:text-2xl">
            {" "}
            Welcome to the {username ? username : ""}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto container  px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          The better auth and identity infrastructure{" "}
        </h1>
        <p className="mx-auto mb-5 max-w-lg text-sm md:mb-6 lg:mb-8">
          Logto is an open-source alternative to Auth0 and an OIDC (OAuth 2.0)
          provider designed for modern applications and SaaS products,
          supporting both authentication and authorization, with SAML also
          supported.
        </p>
        <div className="flex items-stretch justify-center">
          {isAuthenticated ? <SignOut /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}
