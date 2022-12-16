import styled from "styled-components";
import Layout from "./components/Layout";

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`;
const App = () => {
  return (
    <AppWrapper>
      <Layout />
    </AppWrapper>
  );
};

export default App;
