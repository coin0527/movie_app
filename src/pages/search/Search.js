import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MovieSearch } from "../../api";
import { IMG_URL } from "../../constance";

const Wrap = styled.div``;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 100px 0;
`;
const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 1000px;
  margin-right: 30px;
  border: 1px solid white;
  border-radius: 15px;
  height: 70px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  max-width: 100px;
  height: 70px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  opacity: 0.7;
  font-weight: 800;
  font-size: 24px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
`;
const Form = styled.form``;
const Section = styled.section`
  border: 1px solid white;
  width: 100%;
  height: 500px;
  display: grid;
  /* grid가 적용될 부모에게 사용, 플렉스와 동일 */
  grid-template-columns: repeat(5, 1fr);
  /* 그리드 레이아웃을 규칙에 맞게 반복시킴 */
  /* 1fr: 컨텐츠끼리 1배율씩 똑같은 값으로 크기를 나눠가짐 */
  /* repeat(가로개수, 크기값) */
  column-gap: 30px;
  /* 가로 컨텐츠 간격 */
  row-gap: 50px;
  /* 세로 컨텐츠 간격 */
`;

const Con = styled.div``;

const Bg = styled.div`
  width: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.div``;

export const Search = () => {
  const [term, setTerm] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  const searchHandler = async (data) => {
    //이벤트 작성시 실행될 내용
    const { search: Keyword } = data;
    try {
      const { results } = await MovieSearch(Keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);

  return (
    <Wrap>
      <SearchWrap>
        <Form onSubmit={handleSubmit(searchHandler)}>
          <Input
            {...register("search", {
              required: " 검색어를 입력해 주세요. ",
            })}
            type="text"
            placeholder="검색어를 입력해주세요."
          />
        </Form>
        <Button $isActive={isValid}> Search </Button>
      </SearchWrap>

      <Section>
        {term &&
          term.map((data) => (
            <Con key={data.id}>
              <Bg $bgUrl={data.backdrop_path} />
              <MovieTitle> {data.title} </MovieTitle>
            </Con>
          ))}
      </Section>
    </Wrap>
  );
};
