import styled from "styled-components";
import Sider from "./Sider";

const LayoutWrapper = styled.div`
  max-width: 1920px;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Sider />
    </LayoutWrapper>
  );
};

export default Layout;
