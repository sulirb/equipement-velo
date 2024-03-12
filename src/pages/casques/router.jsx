import { Navigate, Route } from "react-router-dom";
import CasqueArticle from "./article";

export function casquesRoute() {
  return (
    <>
      <Route path="/casques/:slug" element={<CasqueArticle />} />
      <Route path="/casques/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
