export const Races = {
  humain: 'Humain',
  norn: 'Norn',
  charr: 'Charr',
  sylvari: 'Sylvari',
  asura: 'Asura',
}

export const Orders = {
  durmand:  'Prieuré de Durmand',
  soupir: 'Ordre des Soupirs',
  veilleur: 'Les Veilleurs',
}

export const Classes = {
  necromant: 'Nécromant',
  envouteur: 'Envoûteur',
  elementaliste: 'Elémentaliste',
  voleur: 'Voleur',
  ingenieur: 'Ingénieur',
  rodeur: 'Rôdeur',
  gardien: 'Gardien',
  guerrier: 'Guerrier',
  revenant: 'Revenant',
}

export interface Character {
  id: number;
  name: string;
  date: Date;
  race: string;
  class: string;
  role: string;
  order: string;
  ally: string;
}

export interface DateArray {
  character: string;
  birthday: Date;
  gamingTime: number;
}
