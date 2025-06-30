import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SideBar from "@/app/components/navigation/SideBar";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  if (session) {
    return (
      <div className="container flex">
        <SideBar />
        <div className="flex-1 p-4">
          <h1 className="text-xl">Hey Man, welcome to the dashboard</h1>
          <h2>Welcome {session.user.name}</h2>
        </div>
      </div>
    );
  }
}
