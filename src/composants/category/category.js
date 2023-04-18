import clsx from "clsx";
import styles from "./category.module.css";
import CardPersonnage from "@/composants/cardPersonnage/cardPersonnage";

const Category = ({ category, moveUp, categoryIndex, moveDown }) => {
  console.log({ category });
  return (
    <div
      style={{ backgroundColor: category.color }}
      className={styles.categoryContainer}
    >
      <div className={styles.startCategoryName}>{category.name}</div>
      {category.listCard.map((personnage, personnageIndex) => (
        <CardPersonnage
          key={personnageIndex}
          personnageIndex={personnageIndex}
          personnage={personnage}
          moveUp={moveUp}
          categoryIndex={categoryIndex}
          moveDown={moveDown}
        ></CardPersonnage>
      ))}
    </div>
  );
};

export default Category;
