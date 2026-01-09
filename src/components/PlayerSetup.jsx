import React, { useState } from 'react';
import { ArrowLeft, UserPlus, X } from 'lucide-react';

const PlayerSetup = ({ game, onBack, onStartGame }) => {
  const [players, setPlayers] = useState(['Player 1', 'Player 2']);
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim() && players.length < game.players.max) {
      setPlayers([...players, newPlayerName.trim()]);
      setNewPlayerName('');
    }
  };

  const removePlayer = (index) => {
    if (players.length > game.players.min) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPlayer();
    }
  };

  const canStart = players.length >= game.players.min && players.length <= game.players.max;

  return (
    <div className="player-setup">
      <div className="setup-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1>Setup Players</h1>
      </div>

      <div className="game-info">
        <h2>{game.name}</h2>
        <p>
          {game.players.min === game.players.max 
            ? `Requires ${game.players.min} players` 
            : `Requires ${game.players.min}-${game.players.max} players`}
        </p>
      </div>

      <div className="players-list">
        {players.map((player, index) => (
          <div key={index} className="player-item">
            <span className="player-number">{index + 1}</span>
            <span className="player-name">{player}</span>
            {players.length > game.players.min && (
              <button
                className="remove-player-btn"
                onClick={() => removePlayer(index)}
              >
                <X size={18} />
              </button>
            )}
          </div>
        ))}
      </div>

      {players.length < game.players.max && (
        <div className="add-player-section">
          <input
            type="text"
            placeholder="Enter player name..."
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="player-input"
          />
          <button
            className="add-player-btn"
            onClick={addPlayer}
            disabled={!newPlayerName.trim()}
          >
            <UserPlus size={20} />
            Add Player
          </button>
        </div>
      )}

      <button
        className="start-game-btn"
        onClick={() => onStartGame(players)}
        disabled={!canStart}
      >
        Start Game
      </button>

      {!canStart && (
        <p className="warning-text">
          {players.length < game.players.min
            ? `Add ${game.players.min - players.length} more player(s)`
            : `Remove ${players.length - game.players.max} player(s)`}
        </p>
      )}
    </div>
  );
};

export default PlayerSetup;
