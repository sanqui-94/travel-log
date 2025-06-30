"use client";
import ArrowLeftEndOnRectangleIcon from "@heroicons/react/24/outline/ArrowLeftEndOnRectangleIcon";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  collapsed?: boolean;
  sideBar?: boolean;
}

export default function LogoutButton({
  collapsed = false,
  sideBar = false,
}: Readonly<LogoutButtonProps>) {
  const { logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/logout");
  }

  function getButtonClassName(): string {
    const base = "btn text-error w-full gap-2 border-black bg-black";
    if (!sideBar) return base;
    const alignment = collapsed ? "justify-center px-0" : "justify-start px-4";
    return `${base} ${alignment}`;
  }

  return (
    <button
      title="Logout"
      className={getButtonClassName()}
      onClick={handleLogout}
      aria-label="Logout from the travel log app"
    >
      <ArrowLeftEndOnRectangleIcon width={32} height={32} />
      {!collapsed && "Logout"}
    </button>
  );
}
