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
  margin-bottom: 25px;
  border: 1px solid white;
  width: 60%;
  padding: 20px;
  border-radius: 20px;
`;

const APITitle = styled.h2``;
const APIExplain = styled.p``;
const APIHttp = styled.h3`
  color: #041cf5;
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
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/login</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          <br />
          Body
          <br />
          <br />
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
          <b>Response</b>
          <br />
          200: 로그인 성공.
          <ul>
            <li>Access Token [accessToken:String]</li>
            <li>Refresh Token [refreshToken:String]</li>
          </ul>
          <br />
          400: 로그인 실패(패스워드가 다름)
          <br />
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>로그아웃</APITitle>
        <APIExplain>
          로그아웃합니다. 로그아웃 성공 여부 값(true/false)을 반환합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/logout</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 로그아웃 성공
          <br />
          401: 토큰이 유효하지 않거나, 만료됨
          <br />
          403: 접근 권한이 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>재발급</APITitle>
        <APIExplain>액세스 토큰과 리프레시 토큰을 재발급합니다.</APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/reissue</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>accessToken</td>
              <td>string</td>
              <td>액세스 토큰 </td>
            </tr>
            <tr>
              <td>refreshToken</td>
              <td>string</td>
              <td>리프레시 토큰</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 액세스, 리프레시 토큰 재발급 성공
          <br />
          401: 토큰이 유효하지 않음
          <br />
          403: 접근 권한이 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>회원가입</APITitle>
        <APIExplain>
          회원가입합니다. 클라이언트에서 로그인 API를 호출하기 전에 호출되어야
          합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/auth/signup</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
          <b>Response</b>
          200: 회원가입 성공
          <br />
          409: 이미 가입된 계정임
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 개설</APITitle>
        <APIExplain>
          강좌를 개설합니다. 로그인 시 발급받은 액세스 토큰이 필요합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>X-AUTH-TOKEN</td>
              <td>string</td>
              <td>액세스 토큰</td>
            </tr>
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
          <b>Response</b>
          200: 강좌 개설 성공
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>수강 취소</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌를 수강 취소합니다. 로그인 시 발급받은 액세스
          토큰이 필요합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/cancel</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수강 취소할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강좌 수강 취소 성공
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>수강 신청</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌를 수강 신청합니다. 로그인 시 발급받은 액세스
          토큰이 필요합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/register</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>수강 신청할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강좌 수강 신청 성공
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 조회</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌 정보를 조회합니다.
          <br />
          성공 시 강좌 아이디, 제목, 부제목, 강사 이름, 수강생 수 값을
          반환합니다.{" "}
        </APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>조회할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강좌 정보 조회 성공 <br />
          <code>
            {"{"} <br />
            &nbsp;"courseId": int, <br />
            &nbsp;"title": string, <br />
            &nbsp;"subtitle": string, <br />
            &nbsp;"instructor": string, <br />
            &nbsp;"attendeeCount": int, <br />
            {"}"}
          </code>
          courseId: 강좌 아이디 <br />
          title: 강의 제목 <br />
          subtitle: 강의 부제목 <br />
          instructor: 강사 <br />
          attendeeCount: 수강생 수 <br />
          <br /> <br />
          404: 해당 강좌를 찾을 수 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 정보 수정</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌 정보를 수정합니다. subtitle과 title 값을
          전달한 인자로 변경합니다.
        </APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
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
          <b>Response</b>
          200: 강좌 수정 성공 <br />
          404: 해당 강좌를 찾을 수 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강좌 삭제</APITitle>
        <APIExplain>courseId에 해당하는 강좌를 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>string</td>
              <td>삭제할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강좌 삭제 성공 <br />
          404: 해당 강좌를 찾을 수 없음
        </ContentBox>
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

      {/*       
      <MethodBox>
        <APITitle>강좌 평점 조회</APITitle>
        <APIExplain>courseId에 해당하는 강좌의 평점을 조회합니다.</APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/front/course/unit/{"{unitId}"}/rating</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>유닛 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
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
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
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
          <b>Response</b>
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
          <b>Request parameters</b>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>userId</td>
              <td>string</td>
              <td>유저 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 플레이어 재생 성공. userId에 해당하는 액세스 토큰 반환
          <br />
          404: 해당 사용자를 찾을 수 없음
        </ContentBox>
      </MethodBox>
 */}

      <MethodBox>
        <APITitle>플레이어 실행</APITitle>
        <APIExplain>
          플레이어의 URL로 이동하여 플레이어가 실행됩니다. <br />
          이 API를 호출하기 전에 회원가입 및 로그인 API가 호출되어야 합니다.
          <br />
          로그인 시 발급받은 액세스 토큰 값이 필요하며, 재생할 강좌 아이디와
          강의 아이디를 인자로 전달합니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/player/execute</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Header
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
            <th align="left">Parameter</th>
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
          <b>Response</b>
          200: 플레이어 실행 성공 <br />
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 업로드</APITitle>
        <APIExplain>
          강의를 업로드합니다. 업로드할 원본 영상 파일과 courseId, title 값을
          담고 있는 객체를 인자로 전달합니다. <br />
          성공 시 강의 원본 영상이 원격 서버에 업로르되고 m3u8 확장자로
          변환됩니다.
        </APIExplain>
        <Box>
          <APIHttp>POST</APIHttp>
          <APIExplain>/open/course/unit</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
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
              <td>courseId(int), title(string) 정보를 담고 있는 객체</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강의 등록 성공. unitId 반환 <br />
          404: 해당 강좌가 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 정보 조회</APITitle>
        <APIExplain>
          courseId에 해당하는 강좌 내 강의 목록을 조회합니다. 성공 시 unitId와
          title 값의 리스트가 반환됩니다.
        </APIExplain>
        <Box>
          <APIHttp>GET</APIHttp>
          <APIExplain>/open/course/{"{courseId}"}/unit</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>courseId</td>
              <td>int</td>
              <td>조회할 강좌의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강의 정보 조회 성공. unitId와 title의 리스트 반환 <br />
          404: 해당 강좌가 없음
          <br />
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 수정</APITitle>
        <APIExplain>
          unitId에 해당하는 강의를 수정합니다. 성공 시 title 값이 전달한 인자로
          변경됩니다.
        </APIExplain>
        <Box>
          <APIHttp>PATCH</APIHttp>
          <APIExplain>/open/course/unit/{"{unitId}"}</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Body
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>수정할 강의 제목</td>
            </tr>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>수정할 강의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강의 수정 성공. unitId 반환 <br />
          404: 해당 강의가 없음
        </ContentBox>
      </MethodBox>

      <MethodBox>
        <APITitle>강의 삭제</APITitle>
        <APIExplain>unitId에 해당하는 강의를 삭제합니다.</APIExplain>
        <Box>
          <APIHttp>DELETE</APIHttp>
          <APIExplain>/open/course/unit/{"{unitId}"}</APIExplain>
        </Box>
        <ContentBox>
          <b>Request parameters</b>
          Path
          <table border="1" width="500" cellpadding="10" cellspacing="0">
            <th align="left">Parameter</th>
            <th align="left">Type</th>
            <th align="left">Description</th>
            <tr>
              <td>unitId</td>
              <td>int</td>
              <td>삭제할 강의 아이디</td>
            </tr>
          </table>
          <br />
          <b>Response</b>
          200: 강의 삭제 성공 <br />
          404: 해당 강의가 없음
        </ContentBox>
      </MethodBox>
      <br />
      <br />
    </Wrapper>
  );
}
