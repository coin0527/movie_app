import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MovieSearch } from "../../api";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = () => {
  // const { id } = useParams();
  const [searchData, setSearchData] = useState();

  const {
    register,
    formState: { isValid },
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await MovieSearch();
        setSearchData(data);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, []);
  console.log(searchData);
  return (
    <Wrap>
      <SearchWrap>
        <Form>
          <Input
            {...register("searchname", {
              required: " 검색어를 입력해 주세요. ",
            })}
            type="text"
            placeholder="검색어를 입력해주세요."
          />
        </Form>
        <Button $isActive={isValid}> Search </Button>
      </SearchWrap>

      <Section> Section </Section>
    </Wrap>
  );
};
