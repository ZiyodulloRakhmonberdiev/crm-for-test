import styled from "styled-components";
import ExtraSider from "./ExtraSider";
import Sider from "./Sider";

const LayoutWrapper = styled.div`
  max-width: 1920px;
  display: flex;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Sider />
      <ExtraSider />
    </LayoutWrapper>
  );
};

export default Layout;
