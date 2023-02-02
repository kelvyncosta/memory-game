import { PersistedData } from 'interfaces/Persisted';
import {
  createContext,
  PropsWithChildren,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { PERSISTED_DATA } from 'shared/constants';

import { Deck, DECKS } from 'shared/decks';
import { getLocalItem, setLocalItem } from 'shared/utils/localStorage';
import { shuffleCards } from 'shared/utils/shuffleCards';

interface IDeckContextData {
  deck: Deck;
  changeDeck(deck: Deck): void;
}

const DeckContext = createContext<IDeckContextData>({} as IDeckContextData);

const defaultData: PersistedData = {
  deckType: 'lotr',
};

export function DeckProvider({ children }: PropsWithChildren) {
  const [deck, setDeck] = useState<Deck>(() => {
    const persistedData = getLocalItem<PersistedData>(PERSISTED_DATA);

    if (persistedData) {
      return DECKS[persistedData.deckType];
    }

    setLocalItem(PERSISTED_DATA, defaultData);
    return DECKS[defaultData.deckType];
  });

  const changeDeck = useCallback((newDeck: Deck) => {
    const persistedData = getLocalItem<PersistedData>(PERSISTED_DATA);

    setLocalItem(PERSISTED_DATA, { ...persistedData, deckType: newDeck.type });
    setDeck({ ...newDeck, cards: shuffleCards(newDeck.cards) });
  }, []);

  const contextValue = useMemo(
    () => ({
      deck,
      changeDeck,
    }),
    [deck, changeDeck],
  );

  return (
    <DeckContext.Provider value={contextValue}>{children}</DeckContext.Provider>
  );
}

export const useDeck = (): IDeckContextData => {
  const context = useContext(DeckContext);

  if (!context) throw new Error('useDeck must be used within an DeckProvider');

  return context;
};
