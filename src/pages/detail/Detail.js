import styled from "styled-components";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../../api";
import { IMG_URL } from "../../constance";

const Container = styled.div`
  padding: 100px 150px 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 100px 5%;
  }
`;
const Bg = styled.div`
  border: 1px solid white;
  width: 100%;
  max-width: 40%;
  height: 600px;
  background: url(${IMG_URL}/w1280/${(props) => props.$BgUrl}) no-repeat center /
    cover;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 500px;
  }
`;
const Con = styled.div`
  width: 55%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const Title = styled.h3`
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;
const Rated = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
const Geners = styled.ul`
  margin: 20px 0;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;
const Release = styled.div`
  margin-bottom: 20px;
`;
const Runtime = styled.div`
  letter-spacing: -1px;
`;
const Line = styled.div`
  border: 1px solid white;
  opacity: 0.4;
  margin: 30px 0 30px 0;
`;
const Desc = styled.p`
  line-height: 30px;
  opacity: 0.6;
  max-width: 70%;
  width: 100%;
  padding-top: 30px;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    max-width: 100%;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await MovieDetail(id);
        setDetailData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Bg $BgUrl={detailData.poster_path} />
          <Con>
            <Title> {detailData.title} </Title>
            <Rated> 평점 {Math.round(detailData.vote_average)} </Rated>
            <Geners>
              {detailData.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Geners>
            <Release> {detailData.release_date} </Release>
            <Runtime> {detailData.runtime}min </Runtime>
            <Line></Line>
            <Desc> {detailData.overview} </Desc>
          </Con>
        </Container>
      )}
    </div>
  );
};
