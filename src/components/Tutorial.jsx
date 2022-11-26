import styled from "styled-components";

const Div = styled.div``;

const Wrapper = styled(Div)``;

const Title = styled.h1`
  font-size: 3rem;
  padding: 0 10px 1px 5px;
  border-bottom: 1.5px solid rgb(183, 185, 187);
`;
const TitleTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// const ContentBox = styled.div`
//   width: auto;
//   border-radius: 10px;
//   background-color: #2c2c2c;
//   /* clear: both;
//   float: left; */
//   display: inline-block;
//   padding: 10px;
//   margin-top: 20px;
// `;

export default function Tutorial() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>Tutorial</Title>
      </TitleTab>

      <div>
        Sim Player는 사용자 편의성과 보안성이 강화된 웹 미디어 플레이어입니다.
      </div>
      <div>다양한 플랫폼에서 사용 가능하도록 API를 제공합니다.</div>
      <br />
      <br />
      <br />
      <div>Sim Player는 다음의 기본적인 플레이어의 기능을 지원합니다.</div>
      <ul>
        <li>배속 기능</li>
        <li>전체 화면</li>
        <li>강의 목차 이동</li>
        <li>PIP 모드</li>
        <li>자막 기능</li>
      </ul>
      <div>
        또한 기존 플레이어의 단점을 개선한 다음의 주요 기능들을 제공합니다.
      </div>

      <h2>시간대별 질문/답변 기능</h2>
      <img
        src="img/feature1_question.png"
        width="70%"
        height="70%"
        alt="feature1"
      />
      <div>
        강의를 듣던 중 질문 사항이 생겼을 때, 사이드 바를 통해 바로 질문을 남길
        수 있습니다.
        <br />
        기존의 분리되어 있던 온라인 강의 공간과 질문 공간을 일원화함으로써
        사용자 편의성을 개선하였습니다.
      </div>

      <h2>중복 로그인 제어</h2>
      <img
        src="img/feature2_loginControl.png"
        width="70%"
        height="70%"
        alt="feature2"
      />
      <div>
        동일한 아이디로 중복 접속 시 접속 및 수강을 제어합니다.
        <br />
        이를 통해 부정 수강을 방지하고 향상된 보안성을 제공합니다.
      </div>

      <h2>강의 평가 기능</h2>
      <img
        src="img/feature3_evaluation.png"
        width="70%"
        height="70%"
        alt="feature3"
      />
      <div>
        일정 시간 이상 강의를 시청하면 강의 평가를 남길 수 있습니다.
        <br />
        학습자는 등록된 강의 평점을 통해 자신이 원하는 강의를 선별할 수
        있습니다.
      </div>
      <br />
      <br />
    </Wrapper>
  );
}
