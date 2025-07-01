"use client";
import LogoutButton from "@/app/components/buttons/LogoutButton";
import MapIcon from "@heroicons/react/24/solid/MapIcon";
import PlusCircleIcon from "@heroicons/react/24/solid/PlusCircleIcon";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import { useState } from "react";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div
      className={`bg-base-100 h-screen ${collapsed ? "w-20" : "w-64"} p-2 transition-all duration-300`}
    >
      <div className="bg-base-100 sticky top-0 z-10">
        <div className="flex justify-end p-2">
          <button className="btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ChevronRightIcon width={20} height={20} />
            ) : (
              <ChevronLeftIcon width={20} height={20} />
            )}
          </button>
        </div>
      </div>
      <ul
        className={`menu bg-base-200 rounded-box ${collapsed ? "w-full" : "w-56"} flex flex-col items-stretch transition-all duration-300`}
      >
        <li>
          <button
            title="Locations"
            className={`btn text-primary w-full ${collapsed ? "justify-center px-0" : "justify-start px-4"} gap-2`}
          >
            <MapIcon width={20} height={20} />
            {!collapsed && "Locations"}
          </button>
        </li>
        <li>
          <button
            title="Add Location"
            className={`btn text-primary w-full ${collapsed ? "justify-center px-0" : "justify-start px-4"} gap-2`}
          >
            <PlusCircleIcon width={20} height={20} />
            {!collapsed && "Add Location"}
          </button>
        </li>
      </ul>
      <div className="divider"></div>
      <LogoutButton collapsed={collapsed} sideBar />
    </div>
  );
}
