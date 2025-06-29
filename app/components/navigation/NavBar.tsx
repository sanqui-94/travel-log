"use client";
import Link from "next/link";
import LoginButton from "@/app/components/buttons/LoginButton";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";

export default function NavBar() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  async function handleLogout() {
    await logout();
  }

  if (isLoading) {
    return (
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl" href="/">
            Travel Log
          </Link>
        </div>
        <div className="navbar-end">
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          Travel Log
        </Link>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost m-1">
              {user?.image && (
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <Image
                      width={24}
                      height={24}
                      className="rounded-full"
                      src={user.image}
                      alt={user?.name ?? "User avatar"}
                    />
                  </div>
                </div>
              )}
              {user?.name}
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-64 p-2 shadow">
              <li>
                <button onClick={handleLogout} className="text-error">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}
