import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Head = styled(Div)`
  height: 60px;

  color: white;
  box-shadow: 0 1px 1px 0px;
  justify-content: flex-start;
`;

const HeadTab = styled(Div)`
  font-weight: bolder;
  font-size: 35px;
  margin-left: 20px;
  margin-top: -3px;
`;

export default function Header() {
  return (
    <>
      <Head>
        <HeadTab>Sim Player Docs</HeadTab>
      </Head>
    </>
  );
}
