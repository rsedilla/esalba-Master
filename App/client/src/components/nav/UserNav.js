import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/mydashboard" className="nav-link">
          My Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/myprofile" className="nav-link">
          My Profile
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/announcement" className="nav-link">
          Announcement
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/safetyguidelines" className="nav-link">
          Safety Guidelines
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/reportincident" className="nav-link">
          Report an Incident
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/usersettings" className="nav-link">
          Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/chat" className="nav-link">
          Chatbox
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/logout" className="nav-link">
          Logout
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
