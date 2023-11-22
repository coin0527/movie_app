import styled from "styled-components";

const Img = styled.div`
  width: 500px;
  height: 300px;
  background: url(https://search.pstatic.net/sunny/?src=https%3A%2F%2Fst4.depositphotos.com%2F17714924%2F22824%2Fv%2F450%2Fdepositphotos_228248886-stock-illustration-photography-icon-premium-style-design.jpg&type=a340)
    no-repeat center / cover;
`;

export const Noimage = () => {
  return <Img></Img>;
};
