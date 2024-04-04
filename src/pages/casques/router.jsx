import { Navigate, Route } from "react-router-dom";
import CasqueArticle from "./article";
import HelmetArticles from "./index";

export function casquesRoute() {
  return (
    <>
      <Route path="/casques" element={<HelmetArticles />} />
      <Route path="/casques/:slug" element={<CasqueArticle />} />
      <Route path="/casques/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
