import styled from "styled-components";
const Div = styled.div``;

const Wrapper = styled(Div)``;

const Title = styled.h1`
  font-size: 50px;
  padding: 0 10px 1px 5px;
  border-bottom: 1.5px solid rgb(183, 185, 187);
`;
const TitleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ContentBox = styled.div``;
const ContentTab = styled.div``;
export default function contact() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>Contact</Title>
      </TitleTab>
      <ContentBox>
        <ContentTab>Email: zh025700@naver.com</ContentTab>
      </ContentBox>
    </Wrapper>
  );
}
