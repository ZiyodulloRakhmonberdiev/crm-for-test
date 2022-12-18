import styled from "styled-components";
import Header from "./Header";
import { Tasks } from "./tasks/Tasks.jsx";

const DashboardWrapper = styled.div`
  width: 100%;
`;
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header />
      <Tasks />
    </DashboardWrapper>
  );
};

export default Dashboard;
