import { useEffect, useState } from "react";
import Tabclassement from "../composants/classement/tabclassement";
import Layout from "@/composants/layout/layout";
import { usePersonnage } from "@/context/personnage";

const Classement = () => {
  const { personnages } = usePersonnage();
  return (
    <div>
      <Layout>
        <Tabclassement personnages={personnages} />
      </Layout>
    </div>
  );
};

export default Classement;
