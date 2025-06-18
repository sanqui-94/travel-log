import { Outlet } from "react-router";
import AppNavBar from "../AppNavBar.tsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
