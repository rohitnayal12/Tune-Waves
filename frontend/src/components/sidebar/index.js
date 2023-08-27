import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate=useNavigate()
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
    const token = localStorage.getItem("token")

    const logOut = () => {
      axios(`http://localhost:8080/tuneWaves/users/logout`,{
        method : "POST",
        headers : {
          Authorization : `Bearer ${token}`
        },

      }).then((res)=>{
        localStorage.clear()
        alert("You have Logged out successfully.")
        
        navigate("/")

      })
      
    }

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        
      </div>
      <SidebarButton title="Sign Out" to=""  icon={<FaSignOutAlt onClick={()=> logOut()}/>} />
    </div>
  );
}

export default Sidebar;
