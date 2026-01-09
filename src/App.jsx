import React, { useState } from 'react';
import GameBrowser from './components/GameBrowser';
import GameDetail from './components/GameDetail';
import PlayerSetup from './components/PlayerSetup';
import Scorecard from './components/Scorecard';
import Timer from './components/Timer';
import { Gamepad2 } from 'lucide-react';
import './App.css';

function App() {
  const [view, setView] = useState('browser'); // 'browser', 'detail', 'setup', 'scorecard', 'timer'
  const [selectedGame, setSelectedGame] = useState(null);
  const [players, setPlayers] = useState([]);

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setView('detail');
  };

  const handleStartScorecard = (game) => {
    setSelectedGame(game);
    setView('setup');
  };

  const handleStartTimer = (game) => {
    setSelectedGame(game);
    setView('timer');
  };

  const handleStartGame = (playersList) => {
    setPlayers(playersList);
    setView('scorecard');
  };

  const handleBackToBrowser = () => {
    setView('browser');
    setSelectedGame(null);
    setPlayers([]);
  };

  const handleBackToDetail = () => {
    setView('detail');
    setPlayers([]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <Gamepad2 size={28} />
          <h1>Complete Game Companion</h1>
        </div>
      </header>

      <main className="app-main">
        {view === 'browser' && (
          <GameBrowser onSelectGame={handleSelectGame} />
        )}

        {view === 'detail' && selectedGame && (
          <GameDetail
            game={selectedGame}
            onBack={handleBackToBrowser}
            onStartScorecard={handleStartScorecard}
            onStartTimer={handleStartTimer}
          />
        )}

        {view === 'setup' && selectedGame && (
          <PlayerSetup
            game={selectedGame}
            onBack={handleBackToDetail}
            onStartGame={handleStartGame}
          />
        )}

        {view === 'scorecard' && selectedGame && players.length > 0 && (
          <Scorecard
            game={selectedGame}
            players={players}
            onBack={handleBackToBrowser}
          />
        )}

        {view === 'timer' && selectedGame && (
          <Timer
            game={selectedGame}
            onBack={handleBackToDetail}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Complete Game Companion v1.0</p>
      </footer>
    </div>
  );
}

export default App;
