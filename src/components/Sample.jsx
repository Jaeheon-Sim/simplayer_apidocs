import styled from "styled-components";

const Div = styled.div``;

const Wrapper = styled(Div)``;

const Title = styled.h1`
  padding: 0 10px 1px 5px;
  border-bottom: 1.5px solid rgb(183, 185, 187);
`;
const TitleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ContentBox = styled.div``;

const Table = styled.table`
  color: white;
`;

export default function API() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>API</Title>
      </TitleTab>
      <ContentBox>API 내용 적어</ContentBox>
      <Table>여기 안에 api 내용 적어 테이블로 노션처럼</Table>
    </Wrapper>
  );
}
