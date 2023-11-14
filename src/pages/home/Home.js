import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";

const Mainbanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
`;

export const Home = () => {
  // 지역변수 -> 전역변수 useState
  const [nowPlayingData, setNowplayingData] = useState();
  const [loading, setLoading] = useState(true);

  // api 요청, 비동기통신, 예외처리
  useEffect(() => {
    (async () => {
      try {
        //비구조화 할당 사용 = results
        const { results } = await nowPlaying();
        setNowplayingData(results); // 실제 저장값을 할당
        setLoading(false);
      } catch (error) {
        console.log("에러 : " + error);
      }
    })();
  }, []);

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          {nowPlayingData && (
            <Mainbanner>
              <BlackBg />
              <h3> {nowPlayingData[0].title} </h3>
              <p> {nowPlayingData[0].overview} </p>
            </Mainbanner>
          )}
        </div>
      )}
    </>
  );
};
