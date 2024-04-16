import { useState, useEffect } from "react";
import Card from "../../components/listCard";
import "../general/articles.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { baseUrl } from "../../utils/baseUrl";

function HelmetArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/articles/casques`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <HelmetProvider>
      <section className="articles-list">
        <Helmet>
          <title>Casques - Équipement Vélo</title>
          <meta
            name="description"
            content="Retrouvez tous nos articles rédigés avec passion et professionalisme pour vous conseiller au mieux sur les équipements préférés des cyclistes"
          />
        </Helmet>
        <h2>Casques</h2>
        <div className="article__text sub">
          <p>
            Que ce soit pour être protégé ou pour être tendance, trouvez un
            casque qui reflète vos envies et votre personnalité. Retrouvez donc
            les articles avec nos avis sur les casques de vélo: les casques pour
            la pratique du{" "}
            <a href="/article/les-equipements-primordiaux-pour-le-vtt-casque-gants-chaussures">
              VTT
            </a>
            , du{" "}
            <a href="/article/les-equipements-indispensables-pour-les-cyclistes-urbains-le-casque">
              vélo urbain
            </a>{" "}
            ou du vélo de route, les casques pour{" "}
            <a href="/article/choisir-un-bon-casque-de-velo-avec-un-petit-budget">
              les enfants
            </a>{" "}
            ou pour les adultes, pour un{" "}
            <a href="/article/choisir-un-bon-casque-de-velo-avec-un-petit-budget">
              petit
            </a>{" "}
            ou un gros budget, des différentes marques proposées sur notre site,
            de Abus à Uvex, en passant par Scott ou Kask.
          </p>
        </div>
        <div className="list-container">
          {articles.map((article) => (
            <Card
              key={article._id}
              title={article.title}
              picture={article.file}
              content={article.content}
              date={article.createdAt}
              href={
                article.tag === "casques"
                  ? `/casques/${article.slug}`
                  : article.tag === "lunettes"
                  ? `/lunettes/${article.slug}`
                  : article.tag === "vetements"
                  ? `/vetements/${article.slug}`
                  : article.tag === "chaussures"
                  ? `/chaussures/${article.slug}`
                  : `/article/${article.slug}`
              }
            />
          ))}
        </div>
      </section>
    </HelmetProvider>
  );
}

export default HelmetArticles;
