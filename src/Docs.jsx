import styled from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Wrapper = styled.div`
  height: 100vh;
`;
const BodyBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export default function Docs() {
  return (
    <Wrapper>
      <Header />
      <BodyBox>
        <SideBar />
        <Body />
      </BodyBox>
    </Wrapper>
  );
}
