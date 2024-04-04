import { Navigate, Route } from "react-router-dom";
import LunetteArticle from "./article";
import GlassArticles from "./index";

export function lunettesRoute() {
  return (
    <>
      <Route path="/lunettes" element={<GlassArticles />} />
      <Route path="/lunettes/:slug" element={<LunetteArticle />} />
      <Route path="/lunettes/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
