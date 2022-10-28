import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Sample from "./Sample";
import Tutorial from "./Tutorial";
import Contact from "./Contact";
import { MenuAtom } from "../atom";
const Div = styled.div`
  width: 100%;
`;
const BodyWrapper = styled(Div)`
  padding-top: 40px;
  padding-left: 70px;
  color: #fbfbfd;
`;

export default function Body() {
  const menuList = {
    1: <Tutorial />,
    2: <Sample />,
    3: <Contact />,
  };
  const menuAtomVal = useRecoilValue(MenuAtom);
  return <BodyWrapper>{menuList[menuAtomVal]}</BodyWrapper>;
}
