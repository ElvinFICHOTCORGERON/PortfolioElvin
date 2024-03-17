import dayjs, { Dayjs } from "dayjs";

export interface Diplome {
  annee: Dayjs;
  titre: string;
}

export const diplomes: Diplome[] = [
  {
    annee: dayjs().year(2023),
    titre: "DUT informatique parcours CDV",
  },
  {
    annee: dayjs().year(2023),
    titre: "BNSSA",
  },
  {
    annee: dayjs().year(2023),
    titre: "PSE1",
  },
  {
    annee: dayjs().year(2021),
    titre:
      "Baccalauréat Général (Maths, Physiques, SI) mention Bien et Européenne Allemand",
  },
  {
    annee: dayjs().year(2021),
    titre: "Brevet Fédéral 1 Natation",
  },
  {
    annee: dayjs().year(2018),
    titre: "Brevet des collèges mention Bien",
  },
];
