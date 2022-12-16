import styled from "styled-components";
import { Roadmap, Schedule, Tasks, Notes, Files } from "../assets/svg/SVG";

const ExtraSiderWrapper = styled.div`
  padding: 10px 0 10px 0;
  background: #f5f8fa;
`;
const Header = styled.h2`
  font-size: 18px;
  line-height: 21px;
  margin: 14px 16px;
`;
const List = styled.ul`
  margin-top: 12px;
  padding-right: 16px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 14px;
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0094ff" : "")};
  background: ${(props) => (props.active ? "#fff" : "")};
  &:hover {
    background: #fff;
    color: "#0094ff";
  }
  &:before {
    ${(props) =>
      props.active
        ? `
    content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 4px;
      border-right: 5px solid #0094ff;
      background-color: #0094ff;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    `
        : ""}
  }
`;

const ExtraSider = () => {
  return (
    <ExtraSiderWrapper>
      <Header>Tools</Header>
      <List>
        <ListItem>
          <Roadmap />
          Roadmap
        </ListItem>
        <ListItem active>
          <Schedule active />
          Schedule
        </ListItem>
        <ListItem>
          <Tasks />
          Tasks
        </ListItem>
        <ListItem>
          <Notes />
          Notes
        </ListItem>
        <ListItem>
          <Files />
          Files
        </ListItem>
      </List>
    </ExtraSiderWrapper>
  );
};

export default ExtraSider;
