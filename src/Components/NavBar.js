import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";

const menuList = [
  "Lilly White",
  "Normal",
  "Axantic",
  "Cappuccino",
  "Sable",
  "Turtle",
];
const genderList = ["수컷", "암컷", "미구분"];
const NavBar = () => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
      e.target.value = "";
    }
  };
  const onClickEnter = (e) => {
    navigate(`/?q=${e.target.innerText}`);
    divRef.current.style.display = "none";
    toggleRef.current.style.display = "block";
  };
  const divRef = useRef();
  const toggleRef = useRef();
  const closeClick = () => {
    divRef.current.style.display = "none";
    toggleRef.current.style.display = "block";
  };
  const openClick = () => {
    divRef.current.style.display = "inline-block";
    toggleRef.current.style.display = "none";
  };
  return (
    <div className="nav-header">
      <ModalWrap ref={divRef} onClick={closeClick}>
        <ModalMenu>
          <ModalCloseBtn className="modal-close" onClick={closeClick} />
          {menuList.map((menu, idx) => (
            <ModalLi key={idx} onClick={onClickEnter}>
              <ModalA>{menu}</ModalA>
            </ModalLi>
          ))}
        </ModalMenu>
      </ModalWrap>
      <ToggleMenu>
        <FontAwesomeIcon icon={faBars} ref={toggleRef} onClick={openClick} />
      </ToggleMenu>
      <NavLogo>
        <Link to={"/"}>
          <NavLogoImg
            src="https://thumb.ac-illust.com/c3/c37805a9035418af41b90223aef92c7f_t.jpeg"
            alt="logo"
          />
          <Titleh1>Breeding Diary</Titleh1>
        </Link>
      </NavLogo>
      <NavMenuArea>
        <Menu>
          {menuList.map((menu, idx) => (
            <MenuLi onClick={onClickEnter} key={idx}>
              <MenuA to="#">{menu}</MenuA>
            </MenuLi>
          ))}
        </Menu>
        <Menu>
          {genderList.map((menu, idx) => (
            <GenderLi onClick={onClickEnter} key={idx}>
              <MenuA to="#">{menu}</MenuA>
            </GenderLi>
          ))}
        </Menu>
        <SearchBox>
          <SearchIcon icon={faSearch} />
          <SearchBoxInput
            onKeyUp={onCheckEnter}
            type="text"
            placeholder="검색"
          />
        </SearchBox>
      </NavMenuArea>
    </div>
  );
};

export default NavBar;

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: none;
  transition: all 0.3s;
  z-index: 9;
`;
const ModalMenu = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 40vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    box-shadow: 0px 0px 8px #999;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: center;
    padding-top: 50px;
  }
  @media ${(props) => props.theme.desktop} {
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    box-shadow: 0px 0px 8px #999;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: center;
    padding-top: 50px;
  }
`;
const ModalLi = styled.div`
  @media ${(props) => props.theme.mobile} {
    border-bottom: 2px solid #999;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  @media ${(props) => props.theme.desktop} {
    border-bottom: 2px solid #999;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;
const ModalA = styled.a`
  @media ${(props) => props.theme.mobile} {
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: rgba(0, 150, 0, 0.7);
    }
  }
  @media ${(props) => props.theme.desktop} {
    font-size: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: rgba(0, 150, 0, 0.7);
    }
  }
`;

const ModalCloseBtn = styled(CloseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
`;
const ToggleMenu = styled.div`
  @media ${(props) => props.theme.mobile} {
    position: fixed;
    top: 20px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
    z-index: 10;
  }
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;
const NavLogo = styled.div`
  text-align: center;
`;
const NavLogoImg = styled.img`
  width: 100%;
  max-width: 400px;
`;
const Titleh1 = styled.h1`
  text-decoration: none;
  color: #000;
  font-size: 3rem;
  margin-bottom: 50px;
  font-weight: bold;
  color: rgba(0, 150, 0, 0.7);
  text-shadow: 0px 0px 2px #999;
  transition: all 0.3s;
  &:hover {
    color: #999;
  }
`;
const NavMenuArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const SearchBoxInput = styled.input`
  border: none;
  border-bottom: 1px solid #999;
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled(FontAwesomeIcon)`
  color: rgba(0, 150, 0, 0.9);
`;

const Menu = styled.ul`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
  @media ${(props) => props.theme.desktop} {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
`;
const MenuLi = styled.li`
  padding: 5px 10px;
  box-shadow: 0px 0px 4px green;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(0, 150, 0, 0.7);
    color: #fff;
  }
`;
const MenuA = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;
const GenderLi = styled.li`
  padding: 5px 10px;
  box-shadow: 0px 0px 4px #999;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.3s;
  color: #fff;
  cursor: pointer;
  &:first-child {
    background: blue;
  }
  &:nth-child(2) {
    background: violet;
  }
  &:last-child {
    background: black;
  }
`;
