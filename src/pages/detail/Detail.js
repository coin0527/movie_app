import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constance";

const Wrap = styled.div`
  padding: 150px 5%;
`;
const Container = styled.div`
  border: 1px solid white;
  display: flex;
  padding: 150px 5%;
`;
const Bgimg = styled.div`
  border: 1px solid red;
  width: 350px;
  height: 450px;
`;
const TitleWrap = styled.div`
  align-items: center;
  margin: 0 auto;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Rated = styled.div``;
const Genres = styled.ul``;
const Realease = styled.div``;
const RunTime = styled.div``;

const Line = styled.div`
  width: 330px;
  border: 1px solid white;
  opacity: 0.3;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Quest = styled.p`
  opacity: 0.7;
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDetailData(data);
      } catch (error) {
        console.log("error: " + error);
      }
    })();
  }, []);

  console.log(detailData);
  return (
    <Wrap>
      <Container>
        <Bgimg />
        <TitleWrap>
          <Title> {detailData.title} </Title>
          <Rated> </Rated>
          <Genres></Genres>
          <Realease> </Realease>
          <RunTime> </RunTime>
          <Line />
          <Quest> </Quest>
        </TitleWrap>
      </Container>
    </Wrap>
  );
};
