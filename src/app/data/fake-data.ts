import { Character, DateArray } from "../data/enum-interface";

export const characters: Character[] = [
  { id: 1, name: 'Sith Rousse', date: new Date(), race: 'humain', class: 'voleur', role: 'McM', order: 'soupir', ally: '' },
  { id: 2, name: 'Mussy Rana', date: new Date(), race: 'norn', class: 'necromant', role: 'McM', order: 'durmand', ally: 'Ogre' },
  { id: 3, name: 'Shar Na Rök', date: new Date(), race: 'charr', class: 'revenant', role: 'McM', order: 'soupir', ally: 'Skritt' },
];

export const accountArray: DateArray[] = [
  {character: 'Compte', birthday: new Date('2016-11-18'), gamingTime: 1},
  {character: 'Sith Rousse', birthday: new Date('2016-11-18'), gamingTime: 1},
  {character: 'Mussy Rana', birthday: new Date('2016-11-27'), gamingTime: 1},
  {character: 'Shar Na Rök', birthday: new Date('2017-04-21'), gamingTime: 1},
  {character: 'Lepanthès', birthday: new Date('2017-09-02'), gamingTime: 1},
  {character: 'Galatea Goemon', birthday: new Date('2017-09-26'), gamingTime: 1},
  {character: 'Daryùn Marzban', birthday: new Date('2018-07-05'), gamingTime: 1},
  {character: 'Fynch Jr', birthday: new Date('2019-11-24'), gamingTime: 1},
  {character: 'Paulownias', birthday: new Date('2020-05-25'), gamingTime: 1},
  {character: 'Xiantha', birthday: new Date('2020-06-15'), gamingTime: 1},
];
