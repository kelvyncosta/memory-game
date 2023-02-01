import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Board } from 'pages/Board';
import { Home } from 'pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
