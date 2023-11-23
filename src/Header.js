import React from "react";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import HeaderOption from "./HeaderOption";
import { FaHome } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { getAuth } from "firebase/auth";

function Header() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  const logoutOfApp=()=>{
    dispatch(logout())
    const auth=getAuth();
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
          alt=""
        />

        <div className="header_search">
          <BiSearchAlt />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={FaHome} title="Home" />
        <HeaderOption Icon={MdSupervisorAccount} title="My Network" />
        <HeaderOption Icon={MdBusinessCenter} title="Jobs" />
        <HeaderOption Icon={MdMessage} title="Messaging" />
        <HeaderOption Icon={IoMdNotifications} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
