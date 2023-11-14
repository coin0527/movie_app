import { IMG_URL } from "../../constance";
import styled from "styled-components";

const Mainbanner = styled.div`
  height: 80vh;
  padding: 400px 5%;
  position: relative;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 650px;
    width: 100%;
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
  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027); */
`;

export const Banner = ({ data }) => {
  return (
    <Mainbanner $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3> {data.title} </h3>
      <p> {data.overview} </p>
    </Mainbanner>
  );
};
