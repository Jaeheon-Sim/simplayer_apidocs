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

export default function Tutorial() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>Tutorial</Title>
      </TitleTab>
      <ContentBox>우리 플레이어 소개</ContentBox>
      <div>그냥 내용 적을거</div>
      <br />
      <br />
      <br />
      <div> 만약 개조식으로 쓴다면 이렇게</div>
      <ul>
        <li>머시기</li>
        <li>머시기</li>
        <li>머시기</li>
        <li>머시기</li>
      </ul>
    </Wrapper>
  );
}
