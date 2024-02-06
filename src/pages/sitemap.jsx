import { useEffect, useState } from "react";

export const Sitemap = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:3210"); // Remplace example.com par l'URL de ton site

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const links = doc.querySelectorAll("a"); // Sélectionne tous les liens <a> du DOM
        const urlsArray = Array.from(links).map((link) => link.href); // Extrait les href de chaque lien
        setUrls(urlsArray);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h1>Liste des URLs du site</h1>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};
