import { Navigate, Route } from "react-router-dom";
import ChaussureArticle from "./article";
import ShoesArticles from "./index";

export function chaussuresRoute() {
  return (
    <>
      <Route path="/chaussures" element={<ShoesArticles />} />
      <Route path="/chaussures/:slug" element={<ChaussureArticle />} />
      <Route path="/chaussures/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
