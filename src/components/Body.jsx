import styled from "styled-components";
import { useRecoilValue } from "recoil";
import API from "./Sample";
import Tutorial from "./Tutorial";
import Contact from "./Contact";
import { MenuAtom } from "../atom";
const Div = styled.div``;
const BodyWrapper = styled(Div)`
  color: black;
  width: 100%;
  padding-left: 50px;
  @media (max-width: 500px) {
    opacity: 0;
  }
  z-index: 2;
`;

const HiddenDiv = styled.div`
  z-index: -100;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  background-color: transparent;
  opacity: 0;
  @media (max-width: 500px) {
    opacity: 1;
  }
`;
export default function Body() {
  const menuList = {
    1: <Tutorial />,
    2: <API />,
    3: <Contact />,
  };
  const menuAtomVal = useRecoilValue(MenuAtom);
  return (
    <>
      <HiddenDiv>큰 화면으로 봐주세요!</HiddenDiv>
      <BodyWrapper>{menuList[menuAtomVal]}</BodyWrapper>
    </>
  );
}
