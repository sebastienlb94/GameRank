import { addPersonnages, getPersonnages } from "../../../utils/personnages";

export default function handler(req, res) {
  const newPersonnage = req.body;
  console.log(newPersonnage);

  if (newPersonnage) {
    addPersonnages(newPersonnage);
  }

  res.status(200).json({ data: getPersonnages() });
}
