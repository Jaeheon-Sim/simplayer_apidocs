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
  min-width: 10vw;
  border-radius: 10px;
  background-color: #dad9d9;
  display: inline-block;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MethodBox = styled.div`
  margin-bottom: 4vh;
  border: 1px solid black;
  width: 60%;
  padding: 3vh;
  border-radius: 20px;
`;

const APITitle = styled.h2``;
const APIExplain = styled.p``;
const APIHttp = styled.h3`
  color: #041cf5;
  margin-right: 20px;
`;

const APIPost = styled.h3`
  color: #008847;
  margin-right: 20px;
  border: inline solid black;
`;

const APIGet = styled.h3`
  color: #041cf5;
  margin-right: 20px;
`;

const APIDelete = styled.h3`
  color: #f93e3e;
  margin-right: 20px;
`;

const APIPatch = styled.h3`
  color: #fba230;
  margin-right: 20px;
`;

const ContentTab = styled.div`
  padding-left: 30px;
  margin-bottom: 20px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Table = styled.table`
  margin: 50px 10px 0px 10px;
`;

const MyDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function API() {
  return (
    <Wrapper>
      <TitleTab>
        <Title>API</Title>
      </TitleTab>

      <MethodBox>
        <APITitle>로그인</APITitle>
        <ContentTab>
          <div>
            로그인합니다. 클라이언트에서 '플레이어 시작' API를 호출하기 전에
            호출되어야 합니다.
            <br />
            호출 성공 시, 액세스 토큰과 리프레시 토큰값을 반환합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/auth/login</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>account</td>
              <td>string</td>
              <td>사용자 계정의 아이디 </td>
            </tr>
            <tr>
              <td>password</td>
              <td>string</td>
              <td>사용자 계정의 비밀번호 </td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>Access Token</td>
              <td>string</td>
              <td>액세스 토큰 </td>
            </tr>
            <tr>
              <td>Refresh Token</td>
              <td>string</td>
              <td>리프레시 토큰 </td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>로그아웃</APITitle>
        <ContentTab>
          <div>
            로그아웃합니다. 로그인 시 발급받은 액세스 토큰을 헤더값으로
            전달합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/auth/logout</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>로그인 시 발급받은 액세스 토큰</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>재발급</APITitle>
        <ContentTab>
          <div>액세스 토큰과 리프레시 토큰을 재발급합니다.</div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/auth/reissue</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>accessToken</td>
              <td>string</td>
              <td>재발급할 액세스 토큰 </td>
            </tr>
            <tr>
              <td>refreshToken</td>
              <td>string</td>
              <td>재발급할 리프레시 토큰</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>회원가입</APITitle>
        <ContentTab>
          <div>
            회원가입합니다. 클라이언트에서 로그인 API를 호출하기 전에 호출되어야
            합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/auth/signup</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>account</td>
              <td>string</td>
              <td>회원가입할 아이디 </td>
            </tr>
            <tr>
              <td>password</td>
              <td>string</td>
              <td>회원가입할 비밀번호</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>회원탈퇴</APITitle>
        <ContentTab>
          <div>
            회원탈퇴합니다. 로그인 시 발급받은 액세스 토큰을 헤더값으로
            전달합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/auth/signup</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>로그인 시 발급받은 액세스 토큰</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 등록</APITitle>
        <ContentTab>
          <div>
            강좌를 등록합니다. 로그인 시 발급받은 액세스 토큰이 필요합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/courses</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Query
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>subtitle (query)</td>
              <td>string</td>
              <td>등록할 강좌의 부제목</td>
            </tr>
            <tr>
              <td>title (query)</td>
              <td>string</td>
              <td>등록할 강좌의 제목</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>등록된 강좌의 아이디</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 조회</APITitle>
        <ContentTab>
          <div>
            courseId에 해당하는 강좌 정보를 조회합니다.
            <br />
            성공 시 강좌 아이디, 제목, 부제목, 강사 이름, 수강생 수 값을
            반환합니다.
          </div>
        </ContentTab>
        <Box>
          <APIGet>GET</APIGet>
          <APIExplain>/api/open/courses/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>조회할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>강좌 아이디</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>강좌 제목</td>
            </tr>
            <tr>
              <td>subtitle</td>
              <td>string</td>
              <td>강좌 부제목</td>
            </tr>
            <tr>
              <td>instructor</td>
              <td>string</td>
              <td>강사 이름</td>
            </tr>
            <tr>
              <td>attendeeCount</td>
              <td>int</td>
              <td>수강생 수</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 삭제</APITitle>
        <ContentTab>
          <div>courseId에 해당하는 강좌를 삭제합니다.</div>
        </ContentTab>
        <Box>
          <APIDelete>DELETE</APIDelete>
          <APIExplain>/api/open/courses/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>삭제할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 수정</APITitle>
        <ContentTab>
          <div>
            강좌 정보를 수정합니다. 해당 강좌의 제목과 부제목을 전달한 값으로
            수정합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPatch>PATCH</APIPatch>
          <APIExplain>/api/open/courses/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수정할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>subtitle</td>
              <td>string</td>
              <td>수정할 강좌의 부제목</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>수정할 강좌의 제목</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수정된 강좌의 아이디</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 수강 취소</APITitle>
        <ContentTab>
          <div>
            강좌를 수강 취소합니다. 로그인 시 발급받은 액세스 토큰이 필요합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/courses/{"{courseId}"}/cancel</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수강 취소할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 수강 신청</APITitle>
        <ContentTab>
          <div>
            강좌를 수강 신청합니다. 로그인 시 발급받은 액세스 토큰이 필요합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/course/{"courseId"}/register</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수강 신청할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      {/* <MethodBox>
        <APITitle>강좌 진척도 조회</APITitle>
        <ContentTab>
          <div>courseId에 해당하는 강좌의 나의 진척도를 조회합니다.</div>
        </ContentTab>
        <Box>
          <APIGet>GET</APIGet>
          <APIExplain>/open/course/{"{courseId}"}/advance</APIExplain>
        </Box>
        <ContentBox>...</ContentBox>
      </MethodBox> */}

      {/*       
      <MethodBox>
        <APITitle>강좌 평점 조회</APITitle>
        <APIExplain>courseId에 해당하는 강좌의 평점을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/front/course/unit/{"{unitId}"}/rating</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>유닛 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          200: 강좌 평점 조회 성공 <br />
          404: 등록된 평점이 없음
        </ContentBox>
      </MethodBox>
 */}

      {/* 
      <MethodBox>
        <APITitle>플레이어 종료</APITitle>
        <APIExplain>플레이어를 종료합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/front/player/off</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>check</td>
              <td>boolean</td>
              <td></td>
            </tr>
            <tr>
              <td>time</td>
              <td>double</td>
              <td>현재 재생 중인 강의의 시청 시간</td>
            </tr>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>강의 아이디</td>
            </tr>
            <tr>
              <td>userId</td>
              <td>int</td>
              <td>유저 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          200: 플레이어 종료 성공 <br />
          404: 해당 강의를 찾을 수 없음
        </ContentBox>
      </MethodBox>
 */}

      {/* 
      <MethodBox>
        <APITitle>플레이어 시작</APITitle>
        <APIExplain>플레이어를 시작합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/front/player/on</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>userId</td>
              <td>string</td>
              <td>유저 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          200: 플레이어 재생 성공. userId에 해당하는 액세스 토큰 반환
          <br />
          404: 해당 사용자를 찾을 수 없음
        </ContentBox>
      </MethodBox>
 */}

      <MethodBox>
        <APITitle>플레이어 실행</APITitle>
        <ContentTab>
          <div>
            플레이어의 URL로 이동하여 플레이어가 실행됩니다. <br />
            이 API를 호출하기 전에 회원가입 및 로그인 API가 호출되어야 합니다.
            <br />
            로그인 시 발급받은 액세스 토큰 값이 필요하며, 성공 시 리다이렉트할
            플레이어의 URL이 반환됩니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/execute</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>재생할 강좌 아이디</td>
            </tr>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>재생할 강의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>playerURL</td>
              <td>string</td>
              <td>리다이렉트할 플레이어의 URL</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 목차 조회</APITitle>
        <ContentTab>
          <div>
            강좌 내 강의 목차를 조회합니다. 성공 시 강의 목차 정보가 반환됩니다.
          </div>
        </ContentTab>
        <Box>
          <APIGet>GET</APIGet>
          <APIExplain>/api/open/courses/{"{courseId}"}/units</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>조회할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>강좌 내 강의 아이디</td>
            </tr>
            <tr>
              <td>title</td>
              <td>int</td>
              <td>강좌 내 강의 제목</td>
            </tr>
          </table>
          <br />
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 업로드</APITitle>
        <ContentTab>
          <div>
            강의를 업로드합니다. 액세스 토큰이 필요합니다.
            <br />
            성공 시 강의 원본 영상이 원격 서버에 업로드되고 m3u8 확장자로
            변환됩니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/course/{"{courseId}"}/units</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>{" "}
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>강의를 등록할 강좌의 아이디</td>
            </tr>
          </table>{" "}
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>file</td>
              <td>file</td>
              <td>업로드할 강의 영상 파일</td>
            </tr>
            <tr>
              <td>unitRequestDto</td>
              <td>object</td>
              <td>강의제목, 강의설명, 강의목표 정보를 담고 있는 객체</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>string</td>
              <td>업로드한 강의 아이디</td>
            </tr>
          </table>{" "}
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 세부 정보 조회</APITitle>
        <ContentTab>
          <div>
            강의의 세부 정보를 조회합니다.
            <br />
            성공 시 강의 아이디, 강의 제목, 강의 설명, 강의 목표 정보를
            반환합니다.
          </div>
        </ContentTab>
        <Box>
          <APIPost>POST</APIPost>
          <APIExplain>/api/open/units/{"{unitId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>조회할 강의 아이디</td>
            </tr>
          </table>{" "}
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>강의 아이디</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>강의 제목</td>
            </tr>
            <tr>
              <td>objective</td>
              <td>string</td>
              <td>강의 설명</td>
            </tr>
            <tr>
              <td>goal</td>
              <td>string</td>
              <td>강의 목표</td>
            </tr>
          </table>{" "}
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 삭제</APITitle>
        <ContentTab>
          <div>강의를 삭제합니다. 액세스 토큰이 필요합니다.</div>
        </ContentTab>
        <Box>
          <APIDelete>DELETE</APIDelete>
          <APIExplain>/api/open/units/{"{unitId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>삭제할 강의 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 수정</APITitle>
        <ContentTab>
          <div>
            강의 정보 수정합니다. 성공 시 강의 제목, 강의 목표, 강의 설명이
            전달한 값 수정되고 수정한 강의 아이디가 반환됩니다.
          </div>
        </ContentTab>
        <Box>
          <APIPatch>PATCH</APIPatch>
          <APIExplain>/api/open/units/{"{unitId}"}</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>string</td>
              <td>수정할 강의 아이디</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>강의 제목</td>
            </tr>
            <tr>
              <td>objective</td>
              <td>string</td>
              <td>강의 목표</td>
            </tr>
            <tr>
              <td>description</td>
              <td>string</td>
              <td>강의 설명</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>string</td>
              <td>수정된 강의 아이디</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>등록한 강좌 목록 조회</APITitle>
        <ContentTab>
          <div>
            회원이 현재 수강중인 강좌의 목록을 반환합니다. 액세스 토큰이
            필요합니다. <br />
            성공 시 수강중인 강좌의 아이디, 이름, 등록 날짜가 반환됩니다.
          </div>
        </ContentTab>
        <Box>
          <APIPatch>PATCH</APIPatch>
          <APIExplain>
            /api/open/users/{"{account}"}/history/courses/
          </APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>account</td>
              <td>int</td>
              <td>조회할 회원의 계정 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>등록한 강좌 아이디</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>등록한 강좌 이름</td>
            </tr>
            <tr>
              <td>date</td>
              <td>string</td>
              <td>수강 등록한 날짜</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>수강 현황 조회</APITitle>
        <ContentTab>
          <div>
            강좌에 대한 강의 수강 현황을 조회합니다. 액세스 토큰이 필요합니다.{" "}
            <br />
            성공 시 강의 아이디, 제목, 완료 여부, 진척도 정보가 반환됩니다
          </div>
        </ContentTab>
        <Box>
          <APIPatch>PATCH</APIPatch>
          <APIExplain>
            /api/open/users/{"{account}"}/history/courses/{"{courseId}"}
          </APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>account</td>
              <td>int</td>
              <td>조회할 회원의 계정 아이디</td>
            </tr>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>조회할 강좌 아이디</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>강의 아이디</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>강의 제목</td>
            </tr>
            <tr>
              <td>complete</td>
              <td>boolean</td>
              <td>수강 완료 여부</td>
            </tr>
            <tr>
              <td>progress</td>
              <td>string</td>
              <td>진척도</td>
            </tr>
          </table>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>회원 비밀번호 변경</APITitle>
        <ContentTab>
          <div>
            회원의 비밀번호를 변경합니다. 액세스 토큰이 필요합니다. <br />
          </div>
        </ContentTab>
        <Box>
          <APIPatch>PATCH</APIPatch>
          <APIExplain>/api/open/users/{"{account}"}/password</APIExplain>
        </Box>
        <ContentBox>
          <MyDiv>Request</MyDiv>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>account</td>
              <td>string</td>
              <td>조회할 회원의 계정 아이디</td>
            </tr>
          </table>
          <br />
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>password</td>
              <td>string</td>
              <td>변경할 비밀번호</td>
            </tr>
          </table>
          <br />
          <MyDiv>Response</MyDiv>
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>에러 코드</APITitle>
        <ContentTab>
          <div>
            API 호출 시 발생할 수 있는 에러 코드의 정보입니다.
            <br />
          </div>
        </ContentTab>
        <ContentBox>
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">code</th>
            <th align="left">message</th>
            <th align="left">statusCode</th>
            <tr>
              <td>-1000</td>
              <td>해당 회원을 조회할 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1001</td>
              <td>해당 강좌를 찾을 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1002</td>
              <td>해당 강의를 찾을 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1003</td>
              <td>수강 중인 강의가 아님</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1004</td>
              <td>등록된 평점이 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1005</td>
              <td>해당 질문을 찾을 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1006</td>
              <td>해당 답변을 찾을 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1007</td>
              <td>강의를 시청한 기록이 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1008</td>
              <td>해당 파일을 찾을 수 없음</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-1009</td>
              <td>이미 수강 중인 강좌임</td>
              <td>404</td>
            </tr>
            <tr>
              <td>-3000</td>
              <td>잘못된 비밀번호</td>
              <td>400</td>
            </tr>
            <tr>
              <td>-3001</td>
              <td>로그인 충돌</td>
              <td>409</td>
            </tr>
            <tr>
              <td>-3002</td>
              <td>현재 시청 중인 계정이 아님</td>
              <td>400</td>
            </tr>
            <tr>
              <td>-3003</td>
              <td>이미 가입된 계정임</td>
              <td>409</td>
            </tr>
            <tr>
              <td>-5001</td>
              <td>리프레쉬 토큰이 잘못됨</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-5002</td>
              <td>리프레쉬 토큰이 만료됨</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-5003</td>
              <td>해당 리소스에 접근하기 위한 권한이 없음</td>
              <td>403</td>
            </tr>
            <tr>
              <td>-5004</td>
              <td>해당 리소스에 접근할 수 없는 권한임</td>
              <td>403</td>
            </tr>
            <tr>
              <td>-5005</td>
              <td>리프레쉬 토큰이 잘못됨</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-5006</td>
              <td>잘못된 Jwt 서명</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-5007</td>
              <td>만료된 토큰</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-5008</td>
              <td>지원하지 않는 토큰</td>
              <td>401</td>
            </tr>
            <tr>
              <td>-7000</td>
              <td>잘못된 형식</td>
              <td>400</td>
            </tr>
            <tr>
              <td>-7001</td>
              <td>잘못된 접근</td>
              <td>400</td>
            </tr>
            <tr>
              <td>-9999</td>
              <td>서버 에러</td>
              <td>500</td>
            </tr>
          </table>
          <br />
        </ContentBox>
      </MethodBox>

      <br />
      <br />
    </Wrapper>
  );
}
