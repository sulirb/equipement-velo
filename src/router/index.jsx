import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Header from "../components/header";
import Footer from "../components/footer";
import { generalRoute } from "../pages/general/router";
import { casquesRoute } from "../pages/casques/router";
import { lunettesRoute } from "../pages/lunettes/router";
import { chaussuresRoute } from "../pages/chaussures/router";
import { vetementsRoute } from "../pages/vetements/router";

import Mentions from "../pages/mentions";
import Contact from "../pages/contact";
import { adminRoute } from "../pages/admin/router";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<Mentions />} />
        {lunettesRoute()}
        {vetementsRoute()}
        {chaussuresRoute()}
        {casquesRoute()}
        {generalRoute()}
        {adminRoute()}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
