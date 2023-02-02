import cn from 'classnames';
import { useCallback } from 'react';

import { ICard } from 'interfaces/Card';

interface ICardProps {
  card: ICard;
  back: string;
  callback(card: ICard): void;
}

export function Card({ card, back, callback }: ICardProps) {
  const handleClick = useCallback(() => {
    if (card.clickable) {
      callback(card);
    }
  }, [callback, card]);

  const classNames = cn({
    card: true,
    flipped: card.flipped,
    shrunken: card.hidden,
  });

  return (
    <div className={classNames} onClick={handleClick} aria-hidden="true">
      <div className="face back">
        <img
          src={back}
          alt="Card back face"
          className="w-32 h-48 object-fill"
        />
      </div>
      <div className="face front">
        <img
          src={card.image}
          alt="Card front face"
          className="w-32 h-48 object-cover"
        />
      </div>
    </div>
  );
}
