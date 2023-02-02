import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DeckProvider } from 'hooks/deck';
import { Board } from 'pages/Board';
import { Home } from 'pages/Home';

export function App() {
  return (
    <DeckProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </DeckProvider>
  );
}
