import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 700;
`;

export const PageNotFound = () => {
  return <Wrap> PAGE NOT FOUND 404 </Wrap>;
};
