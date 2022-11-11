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
const ContentBox = styled.div`
  width: auto;
  border-radius: 10px;
  background-color: #2c2c2c;
  /* clear: both;
  float: left; */
  display: inline-block;
  padding: 10px;
  margin-top: 20px;
`;

const MethodBox = styled.div`
  margin-bottom: 25px;
  border: 1px solid white;
  width: 60%;
  padding: 20px;
  border-radius: 20px;
`;

const APITitle = styled.h2``;

const APIExplain = styled.p``;
const APIHttp = styled.h3`
  color: #eaf700aa;
  margin-right: 20px;
`;
const Table = styled.table`
  color: white;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export default function API() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>API</Title>
      </TitleTab>
      <MethodBox>
        <APITitle>강좌 평점 등록</APITitle>
        <APIExplain>강좌의 평점을 등록합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/front/course/{"{courseId}"}/rating</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>
      {/* // 메소드 박스에 내용을 적어 // 내가 적은 내용만 일단 적어 코드 부분은
      contentbox인데 어떻게 적어야할지 몰라서 일단 저렇게 나둬놓을게 */}

      <MethodBox>
        <APITitle>강의 목록 조회</APITitle>
        <APIExplain>강의 목록을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/front/course/{"{courseId}"}/unit</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 이동</APITitle>
        <APIExplain>unitId에 해당하는 강의로 이동합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 영상 재생</APITitle>
        <APIExplain>강의 영상을 재생합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/play
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>질문 등록</APITitle>
        <APIExplain>유닛의 질문을 등록합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>질문 조회</APITitle>
        <APIExplain>유닛의 질문의 목록을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>질문 수정</APITitle>
        <APIExplain>유닛의 질문을 수정합니다.</APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/
            {"{questionId}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>질문 삭제</APITitle>
        <APIExplain>유닛의 질문을 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/
            {"{questionId}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>답변 목록 조회</APITitle>
        <APIExplain>질문에 대한 답변 목록을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
            {"{replyID}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>답변 수정</APITitle>
        <APIExplain>질문에 대한 답변을 수정합니다.</APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
            {"{replyID}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>답변 삭제</APITitle>
        <APIExplain>질문에 대한 답변을 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/reply/
            {"{replyID}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>답변 등록</APITitle>
        <APIExplain>질문에 대한 답변을 등록합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>
            /front/course/{"{courseId}"}/unit/{"{unitId}"}/question/
            {"{questionId}"}/reply
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>로그인</APITitle>
        <APIExplain>로그인합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/login</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>로그아웃</APITitle>
        <APIExplain>로그아웃합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/logout</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>재발급</APITitle>
        <APIExplain>토큰을 재발급합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/reissue</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>회원가입</APITitle>
        <APIExplain>회원가입합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/signup</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 개설</APITitle>
        <APIExplain>강좌를 개설합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>수강 취소</APITitle>
        <APIExplain>courseId에 해당하는 강좌를 수강 취소합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/cancel</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>수강 신청</APITitle>
        <APIExplain>courseId에 해당하는 강좌를 수강 신청합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/register</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 조회</APITitle>
        <APIExplain>courseId에 해당하는 강좌 정보를 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 수정</APITitle>
        <APIExplain>courseId에 해당하는 강좌 정보를 수정합니다.</APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 삭제</APITitle>
        <APIExplain>courseId에 해당하는 강좌를 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 진척도 조회</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌의 나의 진척도를 조회합니다.
        </APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/advance</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 평점 조회</APITitle>
        <APIExplain>courseId에 해당하는 강좌의 평점을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/rating</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>플레이어 종료</APITitle>
        <APIExplain>플레이어를 종료합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/player/off</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>플레이어 재생</APITitle>
        <APIExplain>플레이어를 재생합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/player/on</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 등록</APITitle>
        <APIExplain>강의를 등록합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/unit</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 등록</APITitle>
        <APIExplain>강의를 등록합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/unit</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 정보 조회</APITitle>
        <APIExplain>unitId에 해당하는 강의 정보를 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/unit</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 수정</APITitle>
        <APIExplain>unitId에 해당하는 강의를 수정합니다.</APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>
            /open/course/{"{courseId}"}/unit/{"{unitId}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 삭제</APITitle>
        <APIExplain>unitId에 해당하는 강의를 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>
            /open/course/{"{courseId}"}/unit/{"{unitId}"}
          </APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox>
      <br />
      <br />
      {/* <Table>
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
      </Table> */}
    </Wrapper>
  );
}
