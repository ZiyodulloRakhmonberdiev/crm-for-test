import styled from "styled-components";
import logo from "../assets/png/logo.png";
import arrowDown from "../assets/png/arrowDown.svg";
import profileCircle from "../assets/png/profileCircle.png";
import searchIcon from "../assets/png/searchIcon.png";

const SiderWrapper = styled.div`
  min-width: 219px;
  background-color: #0f1d40;
  padding-top: 16px;
  height: 100%;
  min-height: 100vh;
`;
const Logo = styled.div`
  padding: 16px;
`;

const SearchWrapper = styled.div`
  margin: 10px 16px 20px 16px;
  position: relative;
`;
const SearchButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
`;
const SearchInput = styled.input`
  background-color: #2d4071;
  border-radius: 4px;
  padding: 9px 30px 9px 10px;
  width: 100%;
  border: 0px;
  color: #fff;
  &:focus {
    outline: none;
  }
`;
const Menu = styled.ul`
  margin-top: 9px;
`;
const MenuItem = styled.li`
  padding: 9px 16px 9px 16px;
  line-height: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    color: #fff;
    background-color: #2d4071;
  }
  &:active {
    color: #fff;
    background-color: #2d4071;
  }
  background: ${(props) => (props.active ? "#2d4071" : "")};
  color: ${(props) => (props.active ? "#fff" : "#8c939f")};
`;
const MenuItemDropDown = styled(MenuItem)`
  gap: 15px;
  padding: 14px 16px 14px 22px;
  color: #fff;
`;
const Sider = () => {
  return (
    <SiderWrapper>
      <Logo>
        <a href="!#">
          <img src={logo} alt="" />
        </a>
      </Logo>
      <SearchWrapper>
        <SearchInput placeholder="Search..." />
        <SearchButton>
          <img src={searchIcon} alt="Search" />
        </SearchButton>
      </SearchWrapper>
      <Menu>
        <MenuItem active>
          <img src={profileCircle} alt="" /> My Workspace
        </MenuItem>
        <MenuItemDropDown>
          <img src={arrowDown} alt="" /> Favorites
        </MenuItemDropDown>
        <MenuItem>Marketing</MenuItem>
        <MenuItem>Mobile App</MenuItem>
        <MenuItemDropDown>
          <img src={arrowDown} alt="" />
          My Projects
        </MenuItemDropDown>
        <MenuItem>Marketing</MenuItem>
        <MenuItem>Landing Pages</MenuItem>
        <MenuItem>Wedding</MenuItem>
        <MenuItem>Mobile App</MenuItem>
        <MenuItem>House Construction</MenuItem>
      </Menu>
    </SiderWrapper>
  );
};

export default Sider;
