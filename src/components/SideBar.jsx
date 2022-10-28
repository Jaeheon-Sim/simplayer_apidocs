import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { MenuAtom } from "../atom";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavBar = styled(Div)`
  margin-top: 2px;

  width: 125px;

  flex-direction: column;
  height: 100%;
`;

const NavTab = styled(Div)`
  cursor: pointer;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;

export default function SideBar() {
  const setMenuAtom = useSetRecoilState(MenuAtom);
  return (
    <NavBar>
      <NavTab
        onClick={() => {
          setMenuAtom(1);
        }}
      >
        Tutorial
      </NavTab>
      <NavTab
        onClick={() => {
          setMenuAtom(2);
        }}
      >
        Sample
      </NavTab>
      <NavTab
        onClick={() => {
          setMenuAtom(3);
        }}
      >
        contact
      </NavTab>
    </NavBar>
  );
}
