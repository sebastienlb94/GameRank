import Layout from "@/composants/layout/layout";
import { usePersonnage } from "@/context/personnage";
import { useEffect, useState } from "react";
import styles from "../styles/tirage.module.css";

const Tirage = () => {
  const { personnages } = usePersonnage();
  const [tabPerso, setTabPerso] = useState(personnages);

  const [joueur1, setJoueur1] = useState(null);
  const [joueur2, setJoueur2] = useState(null);

  const getTirage = () => {
    const tabPersoCopy = [...tabPerso];
    const randomIndex1 = Math.floor(Math.random() * tabPersoCopy.length);
    console.log(randomIndex1);
    setJoueur1(tabPersoCopy.splice(randomIndex1, 1)[0]);

    const randomIndex2 = Math.floor(Math.random() * tabPersoCopy.length);
    setJoueur2(tabPersoCopy.splice(randomIndex2, 1)[0]);
  };

  useEffect(() => {
    setTabPerso(personnages);
  }, [personnages]);

  return (
    <Layout>
      <div>
        <div className={styles.headerTirage}>
          <div className={styles.matchContainer}>
            {joueur1 && joueur2 && (
              <h1 className={styles.tirageTitle}>
                {joueur1.nom} vs {joueur2.nom}
              </h1>
            )}
          </div>
          <button className={styles.buttonTirage} onClick={getTirage}>
            Tirage
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Tirage;
