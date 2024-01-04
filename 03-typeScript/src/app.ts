import { finHeroById } from "./services/hero.services";

const hero = finHeroById(1);
console.log(hero?.name ?? "Hero not found");
