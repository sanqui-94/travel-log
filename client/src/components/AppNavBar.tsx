import { Link } from "react-router";
import LoginButton from "./buttons/LoginButton.tsx";

export default function AppNavBar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to="/">
          Travel Log
        </Link>
      </div>
      <div className="navbar-end">
        <LoginButton />
      </div>
    </div>
  );
}
