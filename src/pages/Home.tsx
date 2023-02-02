import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Options } from './Options';

export function Home() {
  const [showOptions, setShowOptions] = useState(false);

  const navigate = useNavigate();

  const handleNewGame = useCallback(() => {
    navigate('/game-board', { replace: true });
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-4 relative">
      <button type="button" onClick={handleNewGame}>
        New Game
      </button>

      <button type="button" onClick={() => setShowOptions(true)}>
        Choose Deck
      </button>

      {showOptions && <Options onClose={() => setShowOptions(false)} />}
    </div>
  );
}
