import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./Sidebar";

// Define the props for SidebarItem
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  linkto?: string;
  onClick?: () => void; // New onClick prop
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  linkto,
  active = false,
  alert = false,
  onClick,
}) => {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error("SidebarItem must be used within a SidebarProvider");
  }

  const { expanded } = sidebarContext;

  return (
    <Link
      to={`${linkto}`}
      onClick={onClick} // Handle click
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20  -translate-x-3 transition-all
            group-hover:visible inline-flex group-hover:opacity-100 group-hover:translate-x-0 z-20
          `}
        >
          {text}
        </div>
      )}
    </Link>
  );
};
