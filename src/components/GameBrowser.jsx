import React, { useState, useMemo } from 'react';
import { Search, Star, Users, Clock } from 'lucide-react';
import { GAMES, CATEGORIES } from '../data/games';
import { storage } from '../utils/storage';

const GameBrowser = ({ onSelectGame }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Games');
  const [favorites, setFavorites] = useState(storage.getFavorites());

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleToggleFavorite = (e, gameId) => {
    e.stopPropagation();
    const updatedFavorites = storage.toggleFavorite(gameId);
    setFavorites(updatedFavorites);
  };

  const favoriteGames = GAMES.filter(game => favorites.includes(game.id));
  const displayGames = searchTerm || selectedCategory !== 'All Games' ? filteredGames : favoriteGames.length > 0 ? favoriteGames : filteredGames;

  return (
    <div className="game-browser">
      <div className="search-bar">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filters">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {!searchTerm && selectedCategory === 'All Games' && favoriteGames.length > 0 && (
        <div className="section-header">
          <Star size={18} fill="currentColor" />
          <span>Favorites</span>
        </div>
      )}

      <div className="games-grid">
        {displayGames.map(game => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => onSelectGame(game)}
          >
            <div className="game-card-header">
              <h3>{game.name}</h3>
              <button
                className={`favorite-btn ${favorites.includes(game.id) ? 'active' : ''}`}
                onClick={(e) => handleToggleFavorite(e, game.id)}
              >
                <Star size={18} fill={favorites.includes(game.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="game-card-meta">
              <span className="meta-item">
                <Users size={14} />
                {game.players.min === game.players.max 
                  ? `${game.players.min}` 
                  : `${game.players.min}-${game.players.max}`}
              </span>
              <span className="meta-item">
                <Clock size={14} />
                {game.duration} min
              </span>
            </div>
            <div className="game-category">{game.category}</div>
          </div>
        ))}
      </div>

      {displayGames.length === 0 && (
        <div className="empty-state">
          <p>No games found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default GameBrowser;
