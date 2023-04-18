import Layout from "@/composants/layout/layout";
import { usePersonnage } from "@/context/personnage";
import { useState } from "react";
import styles from "../styles/formulaire.module.css";

const Formulaire = () => {
  const personnages = usePersonnage();
  const [newPersonnage, setNewPersonnage] = useState({
    id: 0,
    prenom: "",
    nom: "",
    nbVictoire: 0,
    nbDefaite: 0,
    rang: 0,
  });

  const savePersonnage = async () => {
    const tailleListe = personnages.length;
    setNewPersonnage({ ...newPersonnage, id: tailleListe, rang: tailleListe });
    const response = await fetch("http://localhost:3000/api/personnages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPersonnage),
    });
  };

  return (
    <Layout>
      <div className={styles.containerGen}>
        <div className={styles.containerFormulaire}>
          <form>
            <div className={styles.containerInput}>
              <input
                type="text"
                name="firstName"
                value={newPersonnage.prenom}
                onChange={(e) =>
                  setNewPersonnage({ ...newPersonnage, prenom: e.target.value })
                }
                placeholder="Entrez votre prénom"
              />
            </div>
            <div className={styles.containerInput}>
              <input
                type="text"
                name="lastName"
                value={newPersonnage.nom}
                onChange={(e) =>
                  setNewPersonnage({ ...newPersonnage, nom: e.target.value })
                }
                placeholder="Entrez votre nom"
              />
            </div>
            {newPersonnage.nom && newPersonnage.prenom && (
              <div className={styles.buttonValidation}>
                <button className={styles.button} onClick={savePersonnage}>
                  Valider
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Formulaire;
