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
      <ContentBox>
        Sim Player는 사용자 편의성과 보안성이 강화된 웹 미디어 플레이어입니다.
      </ContentBox>
      <div>다양한 플랫폼에서 사용 가능하도록 API를 제공합니다.</div>
      <br />
      <br />
      <br />
      <div>Sim Player는 다음의 기능을 지원합니다.</div>
      <ul>
        <li>배속 기능</li>
        <li>전체 화면</li>
        <li>강의 목차 이동</li>
        <li>PIP 모드</li>
        <li>자막 기능</li>
        <li>시간대별 질문 등록 및 확인 기능</li>
        <li>중복 접속 제어</li>
        <li>강의 평점 기능</li>
      </ul>
    </Wrapper>
  );
}
