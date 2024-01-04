const heroes = [
  {
    id: 1,
    name: "Ironmnan",
    owner: "Marvel",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Batman",
    owner: "DC",
  },
];

const finHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const hero = finHeroById(4);
console.log(hero?.name ?? "Hero not found");
