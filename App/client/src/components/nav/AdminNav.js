import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Barangay Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/announcement" className="nav-link">
          Announcement
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/myprofile" className="nav-link">
          My Profile
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/createannouncement" className="nav-link">
          Create Announcement
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/nutritionemergency" className="nav-link">
          Nutrition Programs Emergency
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/nutritionspecific" className="nav-link">
          Nutrition Programs Specific
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilityschool" className="nav-link">
          Facilities School
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilityevacuation" className="nav-link">
          Facilities Evacuation
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilities/health" className="nav-link">
          Facilities health
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilities/quarantine" className="nav-link">
          Facilities Quarantine
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilities/hvi" className="nav-link">
          HVI MAP
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/facilities/hazardmap" className="nav-link">
          Health Hazard Map
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/logout" className="nav-link">
          Log out
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          Product
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          Products
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
          Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li> */}
    </ul>
  </nav>
);

export default AdminNav;
