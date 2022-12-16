import { useState } from "react";
import styled from "styled-components";
import { Plus, Arrow, Notification } from "../assets/svg/SVG";
import profileImage from "../assets/png/ProfileImage.png";
import searchIcon from "../assets/png/searchIcon.png";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 2px 4px #f0f1f2;
  gap: 16px;
`;
const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;
const RightContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 23px;
`;
const DropDownToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 12px 20px;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: ${(props) => (props.active ? "#E1E4E7" : "#F5F8FA")};
  text-align: center;
  &:hover {
    background: #e1e4e7;
  }
`;
const AddNewButton = styled(DropDownToggler)`
  background: #0094ff;
  color: #fff;
  gap: 7px;
  &:hover {
    background: #0094ff;
  }
`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  position: absolute;
  padding: 6px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #fff;
  margin-top: 8px;
  min-width: 130px;
  z-index: 10;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled("li")`
  border-radius: 4px;
  padding: 12px 8px;
  transition: all 0.3s ease;
  &:hover {
    background: #f5f8fa;
  }
  list-style: none;
  margin-bottom: 0.8em;
`;

const SearchWrapper = styled.div`
  position: relative;
`;
const SearchButton = styled.button`
  position: absolute;
  top: 10px;
  right: 18px;
  bottom: 10px;
`;
const SearchInput = styled.input`
  background: #f5f8fa;
  border-radius: 50px;
  padding: 12px 16px 12px 16px;
  width: 100%;
  border: 0px;
  &:focus {
    outline: none;
  }
`;
const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const NotificationAmount = styled.span`
  position: absolute;
  top: -30%;
  right: -35%;
  transform: translate(40%, 40%);
  font-size: 10px;
  color: #fff;
  background: #f21247;
  border: 1px solid #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 5px 4px;
  line-height: 10px;
`;
const Profile = styled.button`
  cursor: pointer;
`;

const Header = () => {
  const [isOpenTypeDrop, setIsOpenTypeDrop] = useState(false);
  const [isOpenFilterDrop, setIsOpenFilterDrop] = useState(false);
  const [selectedTypeOption, setSelectedTypeOption] = useState(null);
  const [selectedFilterOption, setSelectedFilterOption] = useState(null);
  const typeOptions = ["Kanban", "Board view", "Table view"];
  const filterOptions = ["Filter", "Newest", "Oldest"];

  const togglingTypeDrop = () => {
    if (isOpenFilterDrop) {
      setIsOpenFilterDrop(false);
    }
    setIsOpenTypeDrop(!isOpenTypeDrop);
  };
  const togglingFilterDrop = () => {
    if (isOpenTypeDrop) {
      setIsOpenTypeDrop(false);
    }
    setIsOpenFilterDrop(!isOpenFilterDrop);
  };
  const onOptionTypeClicked = (value) => () => {
    setSelectedTypeOption(value);
    setIsOpenTypeDrop(false);
  };
  const onOptionFilterClicked = (value) => () => {
    setSelectedFilterOption(value);
    setIsOpenFilterDrop(false);
  };
  return (
    <HeaderWrapper>
      <LeftContent>
        <AddNewButton>
          <Plus />
          Add new
        </AddNewButton>
        <div>
          <DropDownToggler onClick={togglingTypeDrop} active={isOpenTypeDrop}>
            {selectedTypeOption || "Kanban"}
            <Arrow active={isOpenTypeDrop} />
          </DropDownToggler>
          {isOpenTypeDrop && (
            <DropDownListContainer>
              <DropDownList>
                {typeOptions.map((typeOption) => (
                  <ListItem
                    onClick={onOptionTypeClicked(typeOption)}
                    key={Math.random()}
                  >
                    {typeOption}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </div>
        <div>
          <DropDownToggler
            onClick={togglingFilterDrop}
            active={isOpenFilterDrop}
          >
            {selectedFilterOption || "Filter"}{" "}
            <Arrow active={isOpenFilterDrop} />
          </DropDownToggler>
          {isOpenFilterDrop && (
            <DropDownListContainer>
              <DropDownList>
                {filterOptions.map((filterOption) => (
                  <ListItem
                    onClick={onOptionFilterClicked(filterOption)}
                    key={Math.random()}
                  >
                    {filterOption}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </div>
      </LeftContent>
      <RightContent>
        <SearchWrapper>
          <SearchInput placeholder="Search..." />
          <SearchButton>
            <img src={searchIcon} alt="Search" />
          </SearchButton>
        </SearchWrapper>
        <NotificationWrapper>
          <Notification />
          <NotificationAmount>99+</NotificationAmount>
        </NotificationWrapper>
        <Profile>
          <img width="100%" height="100%" src={profileImage} alt="My profile" />
        </Profile>
      </RightContent>
    </HeaderWrapper>
  );
};

export default Header;
