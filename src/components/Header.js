import { Link } from "react-router-dom";
import { routes } from "../routes";
//  스타일 컴포넌트 재설치해야할듯

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: black;
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  li {
    margin-left: 60px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}> JMovie </Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}> HOME </Link>
        </li>
        <li>
          <Link to={routes.home}> Search </Link>
        </li>
      </Menu>
    </SHeader>
  );
};
