import { useState, useEffect } from "react";
import Card from "../../components/listCard";
import "../general/articles.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { baseUrl } from "../../utils/baseUrl";

function GlassArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/articles/lunettes`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <HelmetProvider>
      <section className="articles-list">
        <Helmet>
          <title>Lunettes - Équipement Vélo</title>
          <meta
            name="description"
            content="Retrouvez tous nos articles rédigés avec passion et professionalisme pour vous conseiller au mieux sur les équipements préférés des cyclistes"
          />
        </Helmet>
        <h2>Lunettes</h2>
        <div className="article__text sub">
          <p>
            Souvent négligés, les lunettes pour la pratique du vélo sont
            néanmoins importantes pour la protection de vos yeux durant les
            longues sorties, pour vous proteger du soleil ou bien de la pluie,
            des insectes ou du vent, aidez-vous de{" "}
            <a href="/article/un-guide-complet-sur-les-types-de-verres-pour-les-lunettes-de-velo">
              notre guide
            </a>{" "}
            et de nos articles pour choisir la paire que vous sied le mieux, des
            marques Alpina, Julbo ou encore Rudy Project.
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

export default GlassArticles;
