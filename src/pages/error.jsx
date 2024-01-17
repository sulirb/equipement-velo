import "./error.scss";
import errorImage from "../assets/error-404.webp";

function Error() {
  return (
    <div className="error-page">
      <img src={errorImage} alt="Homme qui tombe à vélo" />
      <p>Oups, la page que vous cherchez est introuvable</p>
      <a href="/">Retournez à l&apos;accueil</a>
    </div>
  );
}

export default Error;
