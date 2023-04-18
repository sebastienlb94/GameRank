import Link from "next/link";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.containButtonMenu}>
        <Link href="/classement" className={styles.buttonMenu}>
          Classement
        </Link>
      </div>
      <div className={styles.containButtonMenu}>
        <Link href="/tirage" className={styles.buttonMenu}>
          Tirage
        </Link>
      </div>
      <div>
        <img className={styles.logoMenu} src="logo.png"></img>
      </div>
      <div className={styles.containButtonMenu}>
        <Link href="/tierlist" className={styles.buttonMenu}>
          Tier list
        </Link>
      </div>
      <div className={styles.containButtonMenu}>
        <Link href="/formulaire" className={styles.buttonMenu}>
          Formulaire
        </Link>
      </div>
    </div>
  );
};

export default Menu;
