import styles from "./classement.module.css";

const Tabclassement = ({ personnages }) => {
  return (
    <div>
      <div className={styles.containerCardClassementPersonnage}>
        {personnages.map((personnage, index) => {
          return (
            <div className={styles.cardClassementPersonnage}>
              <div className={styles.textIndexClassement}>{index + 1}</div>
              <div className={styles.containImageClassementPersonnage}>
                <img
                  className={styles.imageClassementPersonnage}
                  alt="image"
                  src="photoIdentite.webp"
                ></img>
              </div>
              <div className={styles.prenomClassementPersonnage}>
                {personnage.prenom}
              </div>
              <div className={styles.nomClassementPersonnage}>
                {personnage.nom.toUpperCase()}
              </div>
              <div className={styles.containTextRankingClassement}>
                <div className={styles.textRankingClassement}>Ranking</div>
                <div className={styles.textRangClassement}>
                  {personnage.rang}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabclassement;
