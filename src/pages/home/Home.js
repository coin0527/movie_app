import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Loading = styled.div`
  margin: 0 auto;
`;

export const Home = () => {
  // 지역변수 -> 전역변수 useState
  const [nowPlayingData, setNowplayingData] = useState();
  const [isloading, setIsLoading] = useState(true);

  // api 요청, 비동기통신, 예외처리
  useEffect(() => {
    (async () => {
      try {
        //비구조화 할당 사용 = results
        const { results } = await nowPlaying();
        setNowplayingData(results); // 실제 저장값을 할당
        // 이작업이 끝나면 로딩이 끝났다는것을 알려줌.
        setIsLoading(false);
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);

  // ascync await : 요청및 응답의 시간을 기다려줘야되는 비동기 작업
  // 을 해야하기 때문에 이를 사용함.

  // console.log(nowPlayingData);

  return (
    <>
      {!isloading ? (
        <Loading>
          <PacmanLoader color="#84B528" />
        </Loading>
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]} />
              <ShowMovie movieData={nowPlayingData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
