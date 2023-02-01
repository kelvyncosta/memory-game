import { shuffle } from 'lodash';

import { ICard } from 'interfaces/Card';

export const shuffleCards = (cards: ICard[]): ICard[] => {
  return shuffle(cards);
};
