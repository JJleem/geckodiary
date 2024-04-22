import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CloseButton from "react-bootstrap/CloseButton";
const menuList = [
  "Lilly White",
  "Normal",
  "Axantic",
  "Cappuccino",
  "Sable",
  "Turtle",
];

const NavBar = () => {
  const divRef = useRef();
  const toggleRef = useRef();
  const closeClick = () => {
    divRef.current.style.display = "none";
    toggleRef.current.style.display = "block";
  };
  const openClick = () => {
    divRef.current.style.display = "block";
    toggleRef.current.style.display = "none";
  };
  return (
    <div className="nav-header">
      <div className="response" ref={divRef}>
        <ul className="modalMenu">
          <CloseButton className="modal-close" onClick={closeClick} />
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="#">{menu}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle-menu">
        <FontAwesomeIcon icon={faBars} ref={toggleRef} onClick={openClick} />
      </div>
      <div className="nav-logo">
        <Link to={"/"}>
          <img
            src="https://thumb.ac-illust.com/c3/c37805a9035418af41b90223aef92c7f_t.jpeg"
            alt="logo"
          />
          <h1 className="titleh1">Breeding Diary</h1>
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, idx) => (
            <li key={idx}>
              <Link to="#">{menu}</Link>
            </li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
