import "./Sidebar.scss";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiChatsTeardrop } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side-container">
      <ul>
        <li className="active">
          <NavLink to="/home" className="active-link">
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className="active-link">
            <MdOutlineLocalLibrary />
            Library
          </NavLink>
        </li>
        <li>
          <NavLink to="/assignment" className="active-link">
          <MdOutlineAssessment />
            Assignment
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className="active-link">
            <HiOutlineDocumentReport />
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/charts" className="active-link">
            <PiChatsTeardrop />
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-management" className="active-link">
            <GrUserManager />
            User Management
          </NavLink>
        </li>
      </ul>
    </div>
  );
}