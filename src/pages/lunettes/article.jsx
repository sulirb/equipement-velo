import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../error";
import GlassTable from "./glassTable";
import "../general/article.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { baseUrl } from "../../utils/baseUrl";

function LunetteArticle() {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;

  useEffect(() => {
    fetch(`${baseUrl}/article/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("404 Not Found");
        }
        return res.json();
      })
      .then((data) => {
        if (data.tag === "lunettes") {
          setArticle(data);
        } else {
          throw new Error("404 Not Found");
        }
      })
      .catch((error) => {
        if (error.message === "404 Not Found") {
          console.error("Article introuvable : ", error);
        }
      });
  }, [slug]);

  const deleteArticle = () => {
    fetch(`${baseUrl}/article/${slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        setArticle((values) => {
          return values.filter((item) => item.id !== slug);
        });
        navigate("/");
      });
  };

  if (!article) return <Error />;

  return (
    <HelmetProvider>
      <section className="backarticle">
        <div className="article">
          <Helmet>
            <title>{article.title} - Équipement Vélo</title>
            <link
              rel="canonical"
              href={`https://equipement-velo.fr/lunettes/${article.slug}`}
            />
            <meta
              name="description"
              content={`${article.content
                .replace(/<[^>]*>/g, "")
                .substring(0, 150)}...`}
            />
            <meta
              name="twitter:description"
              content={`${article.content
                .replace(/<[^>]*>/g, "")
                .substring(0, 150)}...`}
            />
            <meta name="twitter:image" content={article.file} />
            <meta name="twitter:title" content={article.title} />
            <meta name="twitter:card" content="summary" />
            <meta property="og:type" content="website" />
            <meta name="og:title" content={article.title} />
            <meta
              name="og:description"
              content={`${article.content
                .replace(/<[^>]*>/g, "")
                .substring(0, 150)}...`}
            />
            <meta name="og:image" content={article.file} />
          </Helmet>
          <h2 className="article__title"> {article.title}</h2>
          <div className="article__date">Publié le : {article.createdAt}</div>
          <img
            className="article__file"
            src={article.file}
            alt={`${article.content
              .replace(/<[^>]*>/g, "")
              .substring(0, 20)}...`}
          />
          <GlassTable />
          <div
            className="article__text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {token ? <button onClick={deleteArticle}>DELETE</button> : ""}
        </div>{" "}
      </section>
    </HelmetProvider>
  );
}

export default LunetteArticle;
