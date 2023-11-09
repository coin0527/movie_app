import { Mainbanner } from "./Mainbanner";

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
  background-color: teal;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  return (
    <div>
      <Mainbanner>
        <BlackBg />
        <h3> 프레디 </h3>
        <p>나중에 글이 들어갈 내용</p>
      </Mainbanner>
    </div>
  );
};
