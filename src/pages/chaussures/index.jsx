import { useState, useEffect } from "react";
import Card from "../../components/listCard";
import "../general/articles.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { baseUrl } from "../../utils/baseUrl";

function ShoesArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/articles/chaussures`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <HelmetProvider>
      <section className="articles-list">
        <Helmet>
          <title>Chaussures - Équipement Vélo</title>
          <meta
            name="description"
            content="Retrouvez tous nos articles rédigés avec passion et professionalisme pour vous conseiller au mieux sur les équipements préférés des cyclistes"
          />
        </Helmet>
        <h2>Chaussures</h2>
        <div className="article__text sub">
          <p>
            Peu importe la pratique du vélo que vous avez:{" "}
            <a href="/article/les-equipements-primordiaux-pour-le-vtt-casque-gants-chaussures">
              VTT
            </a>
            , route, ou encore{" "}
            <a href="/article/les-equipements-indispensables-pour-les-cyclistes-urbains-les-chaussures">
              urbain
            </a>
            , une bonne paire de chaussures est indispensable pour s&apos;amuser
            en alliant confort, légereté et rigidité. Pour savoir comment
            choisir des chaussures de vélo, n&apos;hésitez pas à lire nos
            articles.
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

export default ShoesArticles;
