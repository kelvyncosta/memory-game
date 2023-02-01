import { ICard } from 'interfaces/Card';

// LOTR Images
import lotr01 from 'assets/images/lotr/01.jpg';
import lotr02 from 'assets/images/lotr/02.jpg';
import lotr03 from 'assets/images/lotr/03.jpg';
import lotr04 from 'assets/images/lotr/04.jpg';
import lotr05 from 'assets/images/lotr/05.jpg';
import lotr06 from 'assets/images/lotr/06.jpg';
import lotr07 from 'assets/images/lotr/07.jpg';
import lotr08 from 'assets/images/lotr/08.jpg';
import lotr09 from 'assets/images/lotr/09.jpg';

import { shuffleCards } from './utils/shuffleCards';
import { generateId } from './utils/generateId';

const lotrImages = [
  lotr01,
  lotr02,
  lotr03,
  lotr04,
  lotr05,
  lotr06,
  lotr07,
  lotr08,
  lotr09,
];

const createDeck = (images: string[]) => {
  const cards: ICard[] = images.map((image, index) => ({
    cardId: index,
    image,
    clickable: true,
    flipped: false,
    hidden: false,
  }));

  const completeDeck = cards
    .concat(cards)
    .map(card => ({ ...card, id: generateId() }));

  return shuffleCards(completeDeck);
};

export const lotrDeck = createDeck(lotrImages);
