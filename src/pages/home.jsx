import { Helmet, HelmetProvider } from "react-helmet-async";
import ArticlesGrid from "../components/home/articlesGrid";
import Banner from "../components/home/banner";
import HomeText from "../components/home/homeText";
import Intro from "../components/home/intro";

function Home() {
  return (
    <HelmetProvider>
      <div className="home">
        <Helmet>
          <meta
            name="description"
            content="Découvrez les meilleurs conseils d'Équipement Vélo pour choisir les casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins. Rendez votre expérience cycliste plus sûre et plus confortable avec nos recommandations expertes."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@EquipementVelo" />
          <meta
            name="twitter:title"
            content="Équipement Vélo - Roulez avec style et en sécurité"
          />
          <meta
            name="twitter:description"
            content="Découvrez les meilleurs conseils d'Équipement Vélo pour choisir les casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins. Rendez votre expérience cycliste plus sûre et plus confortable avec nos recommandations expertes."
          />
          <meta name="twitter:url" content="https://equipement-velo.fr" />
          <meta name="twitter:image" content="/src/assets/logo.png" />
          <meta property="og:site_name" content="Équipement Vélo" />
          <meta property="og:type" content="website" />
          <meta
            name="og:title"
            content="Équipement Vélo - Roulez avec style et en sécurité"
          />
          <meta
            name="og:description"
            content="Découvrez les meilleurs conseils d'Équipement Vélo pour choisir les casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins. Rendez votre expérience cycliste plus sûre et plus confortable avec nos recommandations expertes."
          />
          <meta name="og:url" content="https://equipement-velo.fr" />
          <meta name="og:image" content="/src/assets/logo.png" />
        </Helmet>
        <Banner />
        <Intro />
        <ArticlesGrid />
        <HomeText />
      </div>
    </HelmetProvider>
  );
}

export default Home;
