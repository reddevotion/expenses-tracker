import { getKindeServerSession, LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return (
    <div className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10 px-4">
      <Image src="/images/preview.png" 
        alt="Expenses Tracker app preview"  
        width={700}
        height={472}
        className="rounded-md"/>
      <div>
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Track your <span className="font-extrabold">expenses</span> with ease
        </h1>

        <p className="text-2xl font-medium max-w-[600px]">
          Use Expenses Tracker to easily keep track of your expenses. Get
          lifetime access for $99.
        </p>
        <div className="mt-10 space-x-3">
        {!isLoggedIn ? (
            <>
              <LoginLink className="bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-black/80 transition">
                Login
              </LoginLink>

              <RegisterLink className="bg-black/50 text-white py-2 px-4 rounded-lg font-medium hover:bg-black/80 transition">
                Register
              </RegisterLink>
            </>) : (
            <Link
              href="/app/dashboard"
              className="bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-black/80 transition"
            >
              Go to dashboard
            </Link>)
          }
        </div>
      </div>
    </div>
  );
}
