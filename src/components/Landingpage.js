import { faAdd, faArrowLeftLong, faBackspace, faBackwardStep, faHandBackFist, faRotateBack, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Addtask from "./Addtask";
import Edittask from "./Edittask";
import Taskdetails from "./Taskdetails";
import User from "./User";
import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons/faStepBackward";

function Landingpage() {
  const navigate= useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskdetails/:id"  element={<Taskdetails />} />
        <Route path="/user" element={<User />} />
        <Route path="/addnew" element={<Addtask />} />
        <Route path="/edittask/:id" element={<Edittask />} />
      </Routes>
      <header>
        <nav>
          <p>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </p>
          <p>
            <NavLink to="/addnew">
              <FontAwesomeIcon icon={faAdd} />
            </NavLink>
          </p>
          <p>
            <NavLink to="/user">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </p>
        </nav>
        <p><span className="backbtn" onClick={()=>navigate(-1)}><FontAwesomeIcon icon={faArrowLeftLong} color="white"/></span> </p>
      </header>
    </>
  );
}

export default Landingpage;
