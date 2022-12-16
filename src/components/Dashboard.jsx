import styled from "styled-components";
import Header from "./Header";

const DashboardWrapper = styled.div`
  width: 100%;
`;
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header />
    </DashboardWrapper>
  );
};

export default Dashboard;
