import {
  BarChart3,
  FolderUp,
  Grid2X2,
  Info,
  LayoutDashboard,
  LifeBuoy,
  ListPlus,
  Notebook,
  Settings,
  SquarePen,
  UserRoundPen,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { SidebarItem } from "./SidebarItem";
type MyComponentProps = {
  isTeacher: boolean;
  isAdmin: boolean;
};
const MainSideBar: React.FC<MyComponentProps> = ({ isTeacher, isAdmin }) => {
  // State to track the currently active item
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Handler to update active item
  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  // const isUser: boolean = true;
  return (
    <main className="absolute top-0 left-0  z-50">
      <Sidebar>
        {isAdmin ? (
          <>
            <SidebarItem
              text="Users"
              linkto=""
              icon={<UsersRound size={20} />}
              active={activeItem === "Users"}
              onClick={() => handleItemClick("Users")}
            />
            <SidebarItem
              alert
              text="Update Contents"
              linkto=""
              icon={<FolderUp size={20} />}
              active={activeItem === "Update Contents"}
              onClick={() => handleItemClick("Update Contents")}
            />
            <SidebarItem
              text="Add Quiz"
              linkto=""
              icon={<ListPlus size={20} />}
              active={activeItem === "Add Quiz"}
              onClick={() => handleItemClick("Add Quiz")}
            />
            <SidebarItem
              text="Update Marks"
              linkto=""
              icon={<SquarePen size={20} />}
              active={activeItem === "Update Marks"}
              onClick={() => handleItemClick("Update Marks")}
            />
            <SidebarItem
              text="Notice"
              linkto=""
              icon={<Info size={20} />}
              active={activeItem === "Notice"}
              onClick={() => handleItemClick("Notice")}
            />
          </>
        ) : isTeacher ? (
          <>
            <SidebarItem
              alert
              text="Update Contents"
              linkto=""
              icon={<FolderUp size={20} />}
              active={activeItem === "Update Contents"}
              onClick={() => handleItemClick("Update Contents")}
            />
            <SidebarItem
              text="Add Quiz"
              linkto=""
              icon={<ListPlus size={20} />}
              active={activeItem === "Add Quiz"}
              onClick={() => handleItemClick("Add Quiz")}
            />
            <SidebarItem
              text="Update Marks"
              linkto=""
              icon={<SquarePen size={20} />}
              active={activeItem === "Update Marks"}
              onClick={() => handleItemClick("Update Marks")}
            />
            <SidebarItem
              text="Notice"
              linkto=""
              icon={<Info size={20} />}
              active={activeItem === "Notice"}
              onClick={() => handleItemClick("Notice")}
            />
          </>
        ) : (
          <>
            <SidebarItem
              alert
              text="Dashboard"
              linkto="/dashboard"
              icon={<LayoutDashboard size={20} />}
              active={activeItem === "Dashboard"} // Determine active state
              onClick={() => handleItemClick("Dashboard")} // Update active item
            />
            <SidebarItem
              text="Leaderboard"
              linkto="/dashboard/leaderboard"
              icon={<BarChart3 size={20} />}
              active={activeItem === "Leaderboard"}
              onClick={() => handleItemClick("Leaderboard")}
            />
            <SidebarItem
              text="Classes and Notes"
              linkto=""
              icon={<Notebook size={20} />}
              active={activeItem === "Classes and Notes"}
              onClick={() => handleItemClick("Classes and Notes")}
            />
            <SidebarItem
              text="Quiz"
              linkto=""
              icon={<Grid2X2 size={20} />}
              active={activeItem === "Quiz"}
              onClick={() => handleItemClick("Quiz")}
            />
            <SidebarItem
              text="Profile"
              linkto=""
              icon={<UserRoundPen size={20} />}
              active={activeItem === "Profile"}
              onClick={() => handleItemClick("Profile")}
            />
          </>
        )}

        <hr className="my-3" />
        <SidebarItem
          text="Settings"
          linkto=""
          icon={<Settings size={20} />}
          active={activeItem === "Settings"}
          onClick={() => handleItemClick("Settings")}
        />
        <SidebarItem
          text="Help"
          linkto=""
          icon={<LifeBuoy size={20} />}
          active={activeItem === "Help"}
          onClick={() => handleItemClick("Help")}
        />
      </Sidebar>
    </main>
  );
};

export default MainSideBar;
