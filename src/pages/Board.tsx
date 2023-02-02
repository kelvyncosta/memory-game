import { useEffect, useState } from 'react';

import { Card } from 'components/Card';
import { ICard } from 'interfaces/Card';
import { useDeck } from 'hooks/deck';

export function Board() {
  const { deck } = useDeck();

  const [cards, setCards] = useState<ICard[]>(deck.cards);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [flippedCard, setFlippedCard] = useState<undefined | ICard>(undefined);
  const [tries, setTries] = useState(0);

  useEffect(() => {
    if (matchedPairs === deck.cards.length / 2) {
      setTimeout(() => {
        setGameWon(true);
      }, 750);
    }
  }, [deck.cards.length, matchedPairs]);

  const reloadGame = () => {
    window.location.reload();
  };

  const handleCardClick = (currentCard: ICard) => {
    // VIRAR A CARTA
    setCards(current =>
      current.map(card =>
        card.id === currentCard.id
          ? { ...card, flipped: true, clickable: false }
          : card,
      ),
    );

    // SE FOR A PRIMEIRA CARTA
    if (!flippedCard) {
      setFlippedCard({ ...currentCard });
      return;
    }

    setTries(current => current + 1);

    // CHECA SE A SEGUNDA É PAR DA PRIMEIRA
    if (currentCard.cardId === flippedCard.cardId) {
      setMatchedPairs(current => current + 1);
      setFlippedCard(undefined);

      setTimeout(() => {
        setCards(current =>
          current.map(card =>
            card.cardId === currentCard.cardId ||
            card.cardId === flippedCard.cardId
              ? { ...card, hidden: true }
              : card,
          ),
        );
      }, 700);

      return;
    }

    // CASO NÃO SEJA O PAR
    setTimeout(() => {
      setCards(current =>
        current.map(card =>
          card.cardId === currentCard.cardId ||
          card.cardId === flippedCard.cardId
            ? { ...card, flipped: false, clickable: true }
            : card,
        ),
      );
    }, 1000);

    setFlippedCard(undefined);
  };

  return (
    <div className="flex gap-12 flex-col items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">{deck.title} Memory Game</h1>

        <div className="flex gap-3 justify-between">
          <span>Tries: {tries}</span>
          <span>Matched Pairs: {matchedPairs}</span>
          <span>Total Pairs: {cards.length / 2}</span>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-8 w-full max-w-5xl">
        {cards.map(card => {
          return (
            <Card
              key={`${card.id}`}
              card={card}
              callback={handleCardClick}
              back={deck.back}
            />
          );
        })}
      </div>

      {gameWon && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center">
            <span className="text-6xl">Congratulations</span>
            <span className="text-4xl">You Win</span>
          </div>

          <button type="button" onClick={reloadGame}>
            New Game
          </button>
        </div>
      )}
    </div>
  );
}
