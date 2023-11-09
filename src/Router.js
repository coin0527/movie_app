import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./pages/PageNotFound";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { Header } from "./components/Header";
const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={""} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
