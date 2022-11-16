import styled from "styled-components";
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
`;
const BodyBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding-left: 126px;
  padding-bottom: 20px;
`;
export default function Docs() {
  return (
    <Wrapper>
      <SideBar />
      <BodyBox>
        <Header />
        <Body />
      </BodyBox>
    </Wrapper>
  );
}
