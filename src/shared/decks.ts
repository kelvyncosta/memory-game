import { ICard } from 'interfaces/Card';

import { generateId } from 'shared/utils/generateId';
import { shuffleCards } from 'shared/utils/shuffleCards';

// Back Card Images
import lotrBack from 'assets/images/card-backs/back-lotr.png';
import swBack from 'assets/images/card-backs/back-sw.jpg';
import prBack from 'assets/images/card-backs/back-pr.jpg';

import { imagesLotr, imagesPowerRangers, imagesStarWars } from './decksImages';

export type DeckTypes = 'lotr' | 'starWars' | 'powerRangers';

export interface Deck {
  id: string;
  type: DeckTypes;
  title: string;
  images: string[];
  cards: ICard[];
  back: string;
}

const createDeck = (deck: Deck) => {
  const cards: ICard[] = deck.images.map((image, index) => ({
    cardId: index,
    image,
    clickable: true,
    flipped: false,
    hidden: false,
  }));

  const allCards = cards
    .concat(cards)
    .map(card => ({ ...card, id: generateId() }));

  return { ...deck, cards: shuffleCards(allCards) };
};

const lotrDeck: Deck = {
  id: generateId(),
  type: 'lotr',
  title: 'Lord of the Rings',
  images: imagesLotr,
  cards: [],
  back: lotrBack,
};

const starWarsDeck: Deck = {
  id: generateId(),
  type: 'starWars',
  title: 'Star Wars',
  images: imagesStarWars,
  cards: [],
  back: swBack,
};

const powerRangersDeck: Deck = {
  id: generateId(),
  type: 'powerRangers',
  title: 'Power Rangers',
  images: imagesPowerRangers,
  cards: [],
  back: prBack,
};

export const DECKS = {
  lotr: createDeck(lotrDeck),
  starWars: createDeck(starWarsDeck),
  powerRangers: createDeck(powerRangersDeck),
};
