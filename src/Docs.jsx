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
  min-height: 100vh;
  padding-left: 7.1vw;
  padding-bottom: 20px;
  overflow-x: hidden;
  @media (max-width: 1000px) {
    padding-left: 51px;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
`;
export default function Docs() {
  return (
    <Wrapper>
      <SideBar />
      <BodyBox>
        <Sticky>
          <Header />
        </Sticky>
        <Body />
      </BodyBox>
    </Wrapper>
  );
}
