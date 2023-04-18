import styles from "./cardPersonnage.module.css";

const CardPersonnage = ({
  personnage,
  moveUp,
  personnageIndex,
  categoryIndex,
  moveDown,
}) => {
  return (
    <div className={styles.cardTierList}>
      <div className={styles.containerButtonCard}>
        <button
          className={styles.buttonCard}
          onClick={() => moveUp(categoryIndex, personnageIndex)}
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M12 4L4 12h16z" fill="currentColor" />
          </svg>
        </button>
        <button
          className={styles.buttonCard}
          onClick={() => moveDown(categoryIndex, personnageIndex)}
        >
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M12 20l8-8H4z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <img
        className={styles.imageTierList}
        alt="image"
        src="photoIdentite.webp"
      ></img>
      <div className={styles.personnageName}>{personnage.nom}</div>
    </div>
  );
};

export default CardPersonnage;
