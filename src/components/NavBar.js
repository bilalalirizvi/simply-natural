import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { ShoppingCart } from "../components";
import { NavLink } from "react-router-dom";

const NavbarBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 75px;
  @media (max-width: 930px) {
    padding: 0px 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

const LogoNameBox = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const LogoName = styled.p`
  color: ${({ theme }) => theme.headingColor};
  font-size: 20px;
  margin-left: 15px;
  font-weight: 500;
  @media (max-width: 600px) {
    line-height: 20px;
    font-size: 17px;
  }
`;

const UnorderList = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 1100px) {
    gap: 20px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const List = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: rgb(80, 80, 80);
  cursor: pointer;
`;

const CartIcon = styled.div`
  position: relative;
  width: 28px;
  height: 26px;
  margin-left: 5px;
  border: 2px solid ${(props) => props.theme.red};
  border-radius: 4px;
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 7px;
    border-right: 2px solid ${(props) => props.theme.red};
    border-left: 2px solid ${(props) => props.theme.red};
    border-top: 2px solid ${(props) => props.theme.red};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 6px;
    height: 9px;
  }
`;

const CartIconText = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.red};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.red};
    color: white;
  }
`;

const Drawer = styled.div`
  position: absolute;
  width: 200px;
  top: 80px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgb(200, 200, 200);
  border-top: 2px solid ${(props) => props.theme.red};
  z-index: 1;
  background: white;
`;

const DrawerItem = styled.span`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

const CartAndMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;

const MenuBarIcon = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.red};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.red};
  font-size: 22px;
  margin-left: 20px;
  cursor: pointer;
`;

const Amount = styled.span`
  color: ${(props) => props.theme.red};
  font-weight: 500;
`;

const Menu = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  background-color: white;
  border-top: 1px solid rgb(200, 200, 200);
  @media (min-width: 900px) {
    display: none;
  }
`;

const ArrowButton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  :focus {
    border: 1px solid rgb(120, 120, 120);
  }
`;

const NavBar = ({ bgcColor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [shoppingCartDisplay, setShoppingCartDisplay] = useState(false);

  const shoppingCart = () => {
    setShoppingCartDisplay(false);
  };

  return (
    <>
      {shoppingCartDisplay && <ShoppingCart shoppingCart={shoppingCart} />}
      <NavbarBox style={{ backgroundColor: bgcColor }}>
        <LogoNameBox>
          <LogoImage src={logo} alt="Logo" />
          <LogoName>Simply Natural</LogoName>
        </LogoNameBox>
        <UnorderList>
          <List>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </List>
          <List
            onMouseEnter={() => setDrawerOpen(true)}
            onMouseLeave={() => setDrawerOpen(false)}
          >
            <NavLink
              to={"/store"}
              className="nav-link"
              style={{ position: "relative" }}
            >
              Store
              <MdKeyboardArrowDown
                style={{ fontSize: "20px", position: "relative", top: "5px" }}
              />
            </NavLink>
            {drawerOpen && (
              <Drawer>
                <NavLink to="/substore/plants">
                  <DrawerItem>Plants</DrawerItem>
                </NavLink>
                <NavLink to="/substore/cactus">
                  <DrawerItem>Cactus</DrawerItem>
                </NavLink>
              </Drawer>
            )}
          </List>
          <List>
            <NavLink to={"/aboutus"} className="nav-link">
              About Us
            </NavLink>
          </List>
          <List>
            <NavLink to={"/contactus"} className="nav-link">
              Contact Us
            </NavLink>
          </List>
          <List>
            <NavLink to={"/myaccount"} className="nav-link">
              My Account
            </NavLink>
          </List>
          <List>
            <Amount>$0.00</Amount>
            <CartIcon onClick={() => setShoppingCartDisplay(true)}>
              <CartIconText>0</CartIconText>
            </CartIcon>
          </List>
          <List>
            <FaUser style={{ fontSize: "18px" }} />
          </List>
        </UnorderList>
        <CartAndMenu>
          <Amount>$0.00</Amount>
          <CartIcon onClick={() => setShoppingCartDisplay(true)}>
            <CartIconText>0</CartIconText>
          </CartIcon>
          <MenuBarIcon onClick={() => setMenu(!menu)}>
            {menu ? <IoIosClose /> : <IoIosMenu />}
          </MenuBarIcon>
        </CartAndMenu>
      </NavbarBox>
      {menu && (
        <Menu>
          <NavLink to={"/"} className="menuNavLink">
            Home
          </NavLink>
          <NavLink to={"/store"} className="menuNavLink">
            Store
            <ArrowButton
              onClick={(e) => {
                e.preventDefault();
                setSubMenu(!subMenu);
              }}
            >
              <FiChevronDown
                style={{ fontSize: "18px", color: "rgb(120,120,120)" }}
              />
            </ArrowButton>
          </NavLink>
          {subMenu && (
            <>
              <NavLink to={"/substore/plants"} className="menuNavLink">
                <span>
                  <FiChevronRight /> &nbsp; Plants
                </span>
              </NavLink>
              <NavLink to={"/substore/cactus"} className="menuNavLink">
                <span>
                  <FiChevronRight /> &nbsp; Cactus
                </span>
              </NavLink>
            </>
          )}
          <NavLink to={"/aboutus"} className="menuNavLink">
            About Us
          </NavLink>
          <NavLink to={"/contactus"} className="menuNavLink">
            Contact Us
          </NavLink>
          <NavLink to={"/myaccount"} className="menuNavLink">
            My Account
          </NavLink>
        </Menu>
      )}
    </>
  );
};

export default NavBar;
