import { nowPlaying, popular, topRate, upcomming } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export const Home = () => {
  // 지역변수 -> 전역변수 useState
  const [nowPlayingData, setNowplayingData] = useState();
  const [popData, setPopData] = useState();
  const [rankingData, setRankingData] = useState();
  const [upcommingData, setUpcommingData] = useState();
  const [isloading, setIsLoading] = useState(true);

  // api 요청, 비동기통신, 예외처리
  useEffect(() => {
    (async () => {
      try {
        //비구조화 할당 사용 = results
        const { results: nowResults } = await nowPlaying();
        setNowplayingData(nowResults); // 실제 저장값을 할당

        const { results: popResults } = await popular();
        setPopData(popResults);

        const { results: rankingResults } = await topRate();
        setRankingData(rankingResults);

        const { results: upcommingResults } = await upcomming();
        setUpcommingData(upcommingResults);

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
      {isloading ? (
        <Loading>
          <PacmanLoader color="#84B528" />
        </Loading>
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName="HOME" />
              <Banner data={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  movieData={nowPlayingData}
                  titlename={"현재 상영 영화"}
                />
                <ShowMovie movieData={popData} titlename={"인기 영화"} />
                <ShowMovie movieData={rankingData} titlename={"평점이 높은"} />
                <ShowMovie movieData={upcommingData} titlename={"업 커밍"} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
