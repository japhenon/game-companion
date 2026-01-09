import React, { useState } from 'react';
import { ArrowLeft, Trophy, Calendar, Users, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

function History({ history, games, onBack }) {
  const [expandedSessions, setExpandedSessions] = useState(new Set());

  const toggleExpanded = (sessionId) => {
    const newExpanded = new Set(expandedSessions);
    if (newExpanded.has(sessionId)) {
      newExpanded.delete(sessionId);
    } else {
      newExpanded.add(sessionId);
    }
    setExpandedSessions(newExpanded);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const calculateWinner = (session) => {
    const game = games.find(g => g.id === session.gameId);
    if (!game || game.scoringType === 'custom') {
      return null;
    }

    const totals = session.players.map(player => ({
      name: player.name,
      total: player.scores.reduce((sum, score) => sum + score, 0)
    }));

    if (game.scoringType === 'highest') {
      return totals.reduce((max, player) =>
        player.total > max.total ? player : max
      );
    } else {
      return totals.reduce((min, player) =>
        player.total < min.total ? player : min
      );
    }
  };

  const getGameDuration = (session) => {
    if (!session.completedAt) return null;
    const duration = Math.round((session.completedAt - session.startedAt) / 60000);
    return `${duration} min`;
  };

  if (history.length === 0) {
    return (
      <div className="history">
        <header className="history-header">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <h1>Game History</h1>
        </header>
        <div className="empty-state">
          <Trophy size={48} />
          <p>No completed games yet</p>
          <p className="empty-state-subtitle">
            Start tracking scores and your game history will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="history">
      <header className="history-header">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1>Game History</h1>
      </header>

      <div className="history-stats">
        <div className="stat-card">
          <span className="stat-value">{history.length}</span>
          <span className="stat-label">Games Played</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {new Set(history.map(s => s.gameId)).size}
          </span>
          <span className="stat-label">Different Games</span>
        </div>
      </div>

      <div className="history-list">
        {history.map(session => {
          const isExpanded = expandedSessions.has(session.id);
          const winner = calculateWinner(session);
          const duration = getGameDuration(session);

          return (
            <div key={session.id} className="history-item">
              <div
                className="history-item-header"
                onClick={() => toggleExpanded(session.id)}
              >
                <div className="history-item-info">
                  <h3>{session.gameName}</h3>
                  <div className="history-item-meta">
                    <span>
                      <Calendar size={14} />
                      {formatDate(session.startedAt)}
                    </span>
                    <span>
                      <Users size={14} />
                      {session.players.length} players
                    </span>
                    {duration && (
                      <span>
                        {duration}
                      </span>
                    )}
                  </div>
                  {winner && (
                    <div className="history-winner">
                      <Trophy size={14} />
                      {winner.name} won ({winner.total} points)
                    </div>
                  )}
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {isExpanded && (
                <div className="history-item-details">
                  <table className="history-scores-table">
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th>Total</th>
                        <th>Rounds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {session.players.map((player, index) => {
                        const total = player.scores.reduce((sum, score) => sum + score, 0);
                        return (
                          <tr key={index}>
                            <td>{player.name}</td>
                            <td><strong>{total}</strong></td>
                            <td className="rounds-cell">
                              {player.scores.join(', ')}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
