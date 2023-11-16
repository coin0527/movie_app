import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title> DFlex I {titleName} </title>
    </Helmet>
  );
};
