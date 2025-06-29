import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  if (session) {
    return (
      <div className="container">
        <h1 className="text-xl">Hey Man, welcome to the dashboard</h1>
        <h1>Welcome {session.user.name}</h1>
      </div>
    );
  }
}
