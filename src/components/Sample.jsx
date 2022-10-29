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
      <ContentBox></ContentBox>
      <Table>
        {" "}
        <table border="1">
          <th>대분류</th>
          <th>소분류</th>
          <th>URI</th>
          <th>Method</th>
          <th>설명</th>
          <tr>
            <td>FRONT</td>
            <td>Course</td>
            <td>/front/course/{"{courseId}"}/rating</td>
            <td>POST</td>
            <td>강좌의 평점을 등록합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Unit</td>
            <td>/front/course/{"{courseId}"}/unit</td>
            <td>GET</td>
            <td>강의 목록을 조회합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Unit</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}
            </td>
            <td>GET</td>
            <td>unitId에 해당하는 강의로 이동합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Unit</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/play
            </td>
            <td>POST</td>
            <td>강의 영상을 재생합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Question</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question
            </td>
            <td>POST</td>
            <td>유닛의 질문을 등록합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Question</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question
            </td>
            <td>GET</td>
            <td>유닛의 질문 목록을 조회합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Question</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/
              {"{questionId}"}
            </td>
            <td>PATCH</td>
            <td>유닛의 질문을 수정합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Question</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/
              {"{questionId}"}
            </td>
            <td>DELETE</td>
            <td>유닛의 질문을 삭제합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Reply</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
              {"{replyId}"}
            </td>
            <td>GET</td>
            <td>질문에 대한 답변 목록을 조회합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Reply</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
              {"{replyId}"}
            </td>
            <td>PATCH</td>
            <td>질문에 대한 답변을 수정합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Reply</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
              {"{replyId}"}/{"{replyId}"}
            </td>
            <td>DELETE</td>
            <td>질문에 대한 답변을 삭제합니다.</td>
          </tr>
          <tr>
            <td>FRONT</td>
            <td>Reply</td>
            <td>
              /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
              {"{replyId}"}/reply
            </td>
            <td>POST</td>
            <td>질문에 대한 답변을 등록합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Authentication</td>
            <td>/open/auth/login</td>
            <td>POST</td>
            <td>로그인합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Authentication</td>
            <td>/open/auth/logout</td>
            <td>POST</td>
            <td>로그아웃합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Authentication</td>
            <td>/open/auth/reissue</td>
            <td>POST</td>
            <td>토큰을 재발급합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Authentication</td>
            <td>/open/auth/signup</td>
            <td>POST</td>
            <td>회원가입합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course</td>
            <td>POST</td>
            <td>강좌를 개설합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/cancel</td>
            <td>POST</td>
            <td>courseId에 해당하는 강좌를 수강취소합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/register</td>
            <td>POST</td>
            <td>courseId에 해당하는 강좌를 수강신청합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/{"{courseId}"}</td>
            <td>GET</td>
            <td>courseId에 해당하는 강좌 정보를 조회합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/{"{courseId}"}</td>
            <td>PATCH</td>
            <td>courseId에 해당하는 강좌 정보를 수정합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/{"{courseId}"}</td>
            <td>DELETE</td>
            <td>courseId에 해당하는 강좌를 삭제합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/{"{courseId}"}/advance</td>
            <td>GET</td>
            <td>courseId에 해당하는 강좌의 나의 진척도를 조회합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Course</td>
            <td>/open/course/{"{courseId}"}/rating</td>
            <td>GET</td>
            <td>courseId에 해당하는 강좌의 평점을 조회합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Player</td>
            <td>/open/player/off</td>
            <td>POST</td>
            <td>player를 종료합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Player</td>
            <td>/open/player/on</td>
            <td>POST</td>
            <td>player를 재생합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Unit</td>
            <td>/open/course/{"{courseId}"}/unit</td>
            <td>POST</td>
            <td>강의를 등록합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Unit</td>
            <td>/open/course/{"{courseId}"}/unit</td>
            <td>Get</td>
            <td>unitId에 해당하는 강의 정보를 조회합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Unit</td>
            <td>
              /open/course/{"{courseId}"}/unit/{"{unitId}"}
            </td>
            <td>PATCH</td>
            <td>unitId에 해당하는 강의를 수정합니다.</td>
          </tr>
          <tr>
            <td>OPEN</td>
            <td>Unit</td>
            <td>
              /open/course/{"{courseId}"}/unit/{"{unitId}"}
            </td>
            <td>DELETE</td>
            <td>unitId에 해당하는 강의를 삭제합니다.</td>
          </tr>
        </table>
      </Table>
    </Wrapper>
  );
}
