import { Route } from "react-router-dom";
import Ecriture from "./ecriture";
import Connexion from "./connexion";
import SubmitImage from "./submit";

export function adminRoute() {
  return (
    <>
      <Route path="admin" element={<Connexion />} />
      <Route path="admin/wr" element={<Ecriture />} />
      <Route path="admin/su" element={<SubmitImage />} />
    </>
  );
}
