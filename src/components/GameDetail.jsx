import React from 'react';
import { ArrowLeft, Users, Clock, Timer, ExternalLink } from 'lucide-react';

const GameDetail = ({ game, onBack, onStartScorecard, onStartTimer }) => {
  return (
    <div className="game-detail">
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1>{game.name}</h1>
      </div>

      <div className="detail-info">
        <div className="info-card">
          <Users size={20} />
          <div>
            <div className="info-label">Players</div>
            <div className="info-value">
              {game.players.min === game.players.max 
                ? `${game.players.min}` 
                : `${game.players.min}-${game.players.max}`}
            </div>
          </div>
        </div>

        <div className="info-card">
          <Clock size={20} />
          <div>
            <div className="info-label">Duration</div>
            <div className="info-value">{game.duration} min</div>
          </div>
        </div>

        <div className="info-card">
          <div>
            <div className="info-label">Age</div>
            <div className="info-value">{game.age}</div>
          </div>
        </div>

        <div className="info-card">
          <div className="info-label">Category</div>
          <div className="info-value">{game.category}</div>
        </div>
      </div>

      <div className="action-buttons">
        {game.hasScorecard && (
          <button className="primary-btn" onClick={() => onStartScorecard(game)}>
            Start Scorecard
          </button>
        )}
        {game.hasTimer && (
          <button className="secondary-btn" onClick={() => onStartTimer(game)}>
            <Timer size={18} />
            Start Timer
          </button>
        )}
      </div>
      
      {game.scorecardNote && (
        <div className="scorecard-note">
          <strong>Scorecard Note:</strong> {game.scorecardNote}
        </div>
      )}

      <div className="rules-section">
        <h2>Rules & Resources</h2>
        <div className="rules-links">
          {game.rulesLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link"
            >
              <span>{link.text}</span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="scoring-info">
        <h3>Scoring Type</h3>
        <p>
          {game.scoringType === 'highest' && 'Highest score wins'}
          {game.scoringType === 'lowest' && 'Lowest score wins'}
          {game.scoringType === 'custom' && 'Custom scoring rules - see official rules'}
        </p>
      </div>
    </div>
  );
};

export default GameDetail;
