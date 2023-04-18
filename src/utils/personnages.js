const personnages = [
  {
    id: 1,
    prenom: "Pierre",
    nom: "Perrot",
    nbVictoire: 2,
    nbDefaite: 0,
    rang: 1,
  },
  {
    id: 2,
    prenom: "Michel",
    nom: "Berger",
    nbVictoire: 0,
    nbDefaite: 2,
    rang: 2,
  },
  {
    id: 3,
    prenom: "Steven",
    nom: "Bandaogo",
    nbVictoire: 0,
    nbDefaite: 0,
    rang: 3,
  },
];

export const getPersonnages = () => personnages;

export const addPersonnages = (personnage) => {
  personnages.push(personnage);
  return personnages;
};
