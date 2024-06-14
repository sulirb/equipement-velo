import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../error";
import "./article.scss";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { baseUrl } from "../../utils/baseUrl";

function GeneralArticle() {
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
        if (data.tag) {
          throw new Error("404 Not Found");
        } else {
          setArticle(data);
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
    <section className="backarticle">
      <div className="article">
        <h2 className="article__title">{article.title}</h2>
        <div className="article__date">Publié le : {article.createdAt}</div>
        <img
          className="article__file"
          src={article.file}
          alt={`${article.content.replace(/<[^>]*>/g, "").substring(0, 20)}...`}
        />
        <div
          className="article__text"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        {token ? <button onClick={deleteArticle}>DELETE</button> : ""}
      </div>
    </section>
  );
}

export default GeneralArticle;
