import cn from 'classnames';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { useDeck } from 'hooks/deck';
import { DECKS } from 'shared/decks';

interface OptionsProps {
  onClose(): void;
}

export function Options({ onClose }: OptionsProps) {
  const { deck: selectedDeck, changeDeck } = useDeck();

  const [decks] = useState(() => Object.values(DECKS));

  return (
    <div className="fixed top-0 left-0 w-full h-screen p-10">
      <div className="relative h-full">
        <div
          className="
            absolute w-10 h-10 rounded-full bg-white flex justify-center
            items-center cursor-pointer -top-4 -right-4"
          onClick={onClose}
          aria-hidden="true"
        >
          <IoClose className="text-3xl" />
        </div>
        <div className="bg-white h-full p-3 rounded-xl shadow-xl">
          <span className="text-2xl font-bold">Choose Deck</span>

          <div className="flex justify-center gap-6 flex-wrap;">
            {decks.map(deck => {
              const optionsClasses = cn({
                option__card__image: true,
                selected: deck.id === selectedDeck.id,
              });

              return (
                <div className="flex flex-col items-center">
                  <div className="40 h-52">
                    <img
                      src={deck.back}
                      alt="Deck"
                      className={optionsClasses}
                      onClick={() => changeDeck(deck)}
                      aria-hidden="true"
                    />
                  </div>

                  <span>{deck.title}</span>
                  <span>{deck.images.length * 2} cards</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
