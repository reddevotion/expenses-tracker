import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function checkAuthentication() {
    
    const { isAuthenticated, getUser } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      return redirect("/api/auth/login");
    }

    const user = await getUser();

    return user;
  }