import styled from "styled-components";
import { useRecoilValue } from "recoil";
import API from "./Sample";
import Tutorial from "./Tutorial";
import Contact from "./Contact";
import { MenuAtom } from "../atom";
const Div = styled.div``;
const BodyWrapper = styled(Div)`
  padding-top: 35px;
  padding-left: 70px;
  color: #fbfbfd;
  width: 100%;
`;

export default function Body() {
  const menuList = {
    1: <Tutorial />,
    2: <API />,
    3: <Contact />,
  };
  const menuAtomVal = useRecoilValue(MenuAtom);
  return <BodyWrapper>{menuList[menuAtomVal]}</BodyWrapper>;
}
