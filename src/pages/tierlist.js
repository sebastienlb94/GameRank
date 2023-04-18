import Layout from "@/composants/layout/layout";
import Category from "@/composants/category/category";
import { usePersonnage } from "@/context/personnage";
import { useState, useEffect } from "react";
import styles from "../styles/tierlist.module.css";

const TierList = () => {
  const { personnages } = usePersonnage();
  const [categorys, setCategorys] = useState([]);

  const moveUp = (categoryIndex, personnageIndex) => {
    const newcategorys = [...categorys];
    if (categoryIndex === 0) {
      return { newcategorys };
    }

    const cardPersonnage =
      newcategorys[categoryIndex].listCard[personnageIndex];
    setCategorys(
      categorys.map((category, i) => {
        if (i === categoryIndex) {
          return {
            ...category,
            listCard: category.listCard.filter(
              (c, ci) => ci !== personnageIndex
            ),
          };
        }
        if (i === categoryIndex - 1) {
          return {
            ...category,
            listCard: [cardPersonnage, ...category.listCard],
          };
        } else {
          return category;
        }
      })
    );
  };

  const moveDown = (categoryIndex, personnageIndex) => {
    const newcategorys = [...categorys];
    if (categoryIndex === newcategorys.length - 1) {
      return newcategorys;
    }
    const cardPersonnage =
      newcategorys[categoryIndex].listCard[personnageIndex];
    setCategorys(
      categorys.map((category, i) => {
        if (i === categoryIndex) {
          return {
            ...category,
            listCard: category.listCard.filter(
              (c, ci) => ci !== personnageIndex
            ),
          };
        }
        if (i === categoryIndex + 1) {
          return {
            ...category,
            listCard: [cardPersonnage, ...category.listCard],
          };
        } else {
          return category;
        }
      })
    );
  };

  useEffect(() => {
    setCategorys([
      { id: 1, color: "#F5B7B1", name: "S", listCard: [] },
      { id: 2, color: "#FAD7A0", name: "Top", listCard: [] },
      { id: 3, color: "#F9E79F", name: "Cool", listCard: [] },
      { id: 4, color: "#AED6F1", name: "Ok.", listCard: [] },
      {
        id: 5,
        color: "#F2F3F4",
        name: "Liste des personnages",
        listCard: personnages,
      },
    ]);
  }, [personnages]);

  return (
    <Layout>
      {personnages && (
        <div className={styles.containerTierList}>
          {categorys.map((category, categoryIndex) => (
            <Category
              category={category}
              moveUp={moveUp}
              moveDown={moveDown}
              categoryIndex={categoryIndex}
            ></Category>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default TierList;
