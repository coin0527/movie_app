import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // 이들을 props라 함
import { IMG_URL } from "../../constance";
import { Link } from "react-router-dom";
import "swiper/css";

const Layout = styled.section`
  padding: 150px 5%;
  a {
    color: white;
  }
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
const CoverBg = styled.div`
  height: 250px;
  background-image: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  border-radius: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.h4`
  font-size: 18px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};
export const ShowMovie = ({ movieData }) => {
  return (
    <Layout>
      <Title> 현재 상영 영화 </Title>
      {/* ... < 스프레드 포인트는 괄호를 하나 벗겨준다. */}
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            {/* 스와이퍼 안에는 스와이퍼 슬라이드만 있어야함 */}
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};
