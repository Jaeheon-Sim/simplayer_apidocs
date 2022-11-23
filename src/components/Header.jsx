import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Head = styled(Div)`
  height: 8vh;
  background-color: #e6e5e5;
  color: black;
  box-shadow: 0 1px 1px 0px;
  justify-content: flex-start;
`;

const HeadTab = styled(Div)`
  font-weight: bolder;
  font-size: 3rem;
  margin-left: 20px;
  margin-top: -3px;
`;

export default function Header() {
  return (
    <>
      <Head>
        <HeadTab>Sim Player API Docs</HeadTab>
      </Head>
    </>
  );
}
