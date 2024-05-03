import { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";
import Article from "./article";
import Articles from "./articles";
import { baseUrl } from "../../utils/baseUrl";

export function GeneralRoute() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/articles/all`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const pages = Math.ceil(articles.length / 20);

  // Créer un tableau de routes dynamiquement en fonction du nombre de pages
  const routes = Array.from({ length: pages }, (_, index) => index + 1).map(
    (page) => (
      <Route
        key={page}
        path={`/articles/${page}`}
        element={<Articles page={page} />}
      />
    )
  );

  return (
    <>
      {routes}
      <Route path="/articles" element={<Articles page={1} />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/article/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
