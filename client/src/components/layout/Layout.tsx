import { Outlet } from "react-router";
import AppNavBar from "../navigation/AppNavBar.tsx";

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
