import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { MenuAtom } from "../atom";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavBar = styled(Div)`
  position: fixed;
  margin-top: 2px;
  width: 7vw;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid black;
  flex-shrink: 0;
  font-weight: bolder;
  font-size: 1.3rem;
  flex: 1;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
    width: 50px;
  }
  z-index: 2;
`;

const NavTab = styled(Div)`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  &:hover {
    background-color: #dad9d9;
  }
  color: ${(props) =>
    props.path === props.now ? "rgb(0, 0, 0)" : null}; //props 활용
`;

export default function SideBar() {
  const setMenuAtom = useSetRecoilState(MenuAtom);
  const menuAtomVal = useRecoilValue(MenuAtom);
  return (
    <NavBar>
      <NavTab
        path={1}
        now={menuAtomVal}
        onClick={() => {
          setMenuAtom(1);
        }}
      >
        Tutorial
      </NavTab>
      <NavTab
        path={2}
        now={menuAtomVal}
        onClick={() => {
          setMenuAtom(2);
        }}
      >
        API
      </NavTab>
      <NavTab
        path={3}
        now={menuAtomVal}
        onClick={() => {
          setMenuAtom(3);
        }}
      >
        contact
      </NavTab>
    </NavBar>
  );
}
