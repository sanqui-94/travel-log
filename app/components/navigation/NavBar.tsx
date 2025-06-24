import Link from "next/link";
import LoginButton from "@/app/components/buttons/LoginButton";

export default function NavBar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          Travel Log
        </Link>
      </div>
      <div className="navbar-end">
        <LoginButton />
      </div>
    </div>
  );
}
