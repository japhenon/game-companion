import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Undo2, Save, Trophy } from 'lucide-react';
import { storage } from '../utils/storage';

const Scorecard = ({ game, players, onBack }) => {
  const [scores, setScores] = useState(players.map(() => []));
  const [currentRound, setCurrentRound] = useState(1);
  const [sessionId] = useState(`session_${Date.now()}`);
  const inputRefs = useRef([]);

  // Load saved session on mount
  useEffect(() => {
    const savedSession = storage.getCurrentSession();
    if (savedSession && savedSession.gameId === game.id) {
      setScores(savedSession.scores || players.map(() => []));
      setCurrentRound(savedSession.currentRound || 1);
    }
  }, [game.id, players]);

  // Save session whenever scores change
  useEffect(() => {
    const session = {
      id: sessionId,
      gameId: game.id,
      gameName: game.name,
      players: players,
      scores: scores,
      currentRound: currentRound,
      startedAt: Date.now(),
      completedAt: null
    };
    storage.saveCurrentSession(session);
  }, [scores, currentRound, sessionId, game.id, game.name, players]);

  const getTotalScore = (playerIndex) => {
    return scores[playerIndex].reduce((sum, score) => sum + score, 0);
  };

  const getWinner = () => {
    const totals = players.map((_, index) => getTotalScore(index));
    if (game.scoringType === 'highest') {
      const maxScore = Math.max(...totals);
      return totals.indexOf(maxScore);
    } else if (game.scoringType === 'lowest') {
      const minScore = Math.min(...totals);
      return totals.indexOf(minScore);
    }
    return -1;
  };

  // CRITICAL: Proper Enter key handling to fix the bug
  const handleScoreInput = (playerIndex, value, inputElement) => {
    const numValue = parseInt(value) || 0;
    
    setScores(prev => {
      const updated = [...prev];
      // Ensure the array exists and pad with zeros if needed
      if (!updated[playerIndex]) {
        updated[playerIndex] = [];
      }
      // Add score to current round
      if (updated[playerIndex].length < currentRound) {
        updated[playerIndex].push(numValue);
      } else {
        updated[playerIndex][currentRound - 1] = numValue;
      }
      return updated;
    });

    // Clear the input
    if (inputElement) {
      inputElement.value = '';
    }

    // Auto-advance focus
    if (playerIndex < players.length - 1) {
      // Move to next player
      const nextInput = inputRefs.current[playerIndex + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      // Last player - advance to next round
      setCurrentRound(prev => prev + 1);
      // Focus back to first player
      setTimeout(() => {
        const firstInput = inputRefs.current[0];
        if (firstInput) {
          firstInput.focus();
        }
      }, 100);
    }
  };

  const handleKeyDown = (e, playerIndex) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleScoreInput(playerIndex, e.target.value, e.target);
    }
  };

  const handleBlur = (e, playerIndex) => {
    // Only process if there's a value and score hasn't been entered yet
    const hasScoreForRound = scores[playerIndex]?.length >= currentRound;
    if (e.target.value && !hasScoreForRound) {
      handleScoreInput(playerIndex, e.target.value, e.target);
    }
  };

  const handleInputFocus = (e) => {
    // Scroll input into view on mobile to prevent keyboard covering it
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const undoLastScore = () => {
    setScores(prev => {
      const updated = [...prev];
      // Find the last player with a score in current round
      for (let i = updated.length - 1; i >= 0; i--) {
        if (updated[i].length === currentRound) {
          updated[i].pop();
          // If we removed from first player and it's not round 1, go back a round
          if (i === 0 && currentRound > 1) {
            setCurrentRound(currentRound - 1);
          }
          break;
        }
      }
      return updated;
    });
  };

  const finishGame = () => {
    const session = {
      id: sessionId,
      gameId: game.id,
      gameName: game.name,
      players: players,
      scores: scores,
      currentRound: currentRound,
      startedAt: Date.now(),
      completedAt: Date.now(),
      winner: getWinner()
    };
    storage.addToHistory(session);
    storage.clearCurrentSession();
    onBack();
  };

  const winner = getWinner();

  return (
    <div className="scorecard">
      <div className="scorecard-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>{game.name}</h1>
          <p className="round-indicator">Round {currentRound}</p>
        </div>
      </div>

      <div className="scorecard-content">
        <div className="score-table">
          <div className="score-header-row">
            <div className="player-col-header">Player</div>
            <div className="rounds-col-header">Scores</div>
            <div className="total-col-header">Total</div>
          </div>

          {players.map((player, playerIndex) => {
            const playerScores = scores[playerIndex] || [];
            const total = getTotalScore(playerIndex);
            const isWinning = winner === playerIndex;

            return (
              <div key={playerIndex} className={`score-row ${isWinning ? 'winning' : ''}`}>
                <div className="player-col">
                  {isWinning && <Trophy size={16} className="winner-icon" />}
                  {player}
                </div>
                <div className="rounds-col">
                  {playerScores.map((score, roundIndex) => (
                    <span key={roundIndex} className="round-score">
                      {score}
                    </span>
                  ))}
                </div>
                <div className="total-col">{total}</div>
              </div>
            );
          })}
        </div>

        <div className="score-input-section">
          <h3>Enter Scores for Round {currentRound}</h3>
          <div className="score-inputs">
            {players.map((player, playerIndex) => {
              const hasScoreForRound = scores[playerIndex]?.length >= currentRound;
              
              return (
                <div key={playerIndex} className="score-input-item">
                  <label>{player}</label>
                  <input
                    ref={el => inputRefs.current[playerIndex] = el}
                    type="number"
                    inputMode="numeric"
                    placeholder="0"
                    onKeyDown={(e) => handleKeyDown(e, playerIndex)}
                    onBlur={(e) => handleBlur(e, playerIndex)}
                    onFocus={handleInputFocus}
                    disabled={hasScoreForRound}
                    className="score-input"
                  />
                  {hasScoreForRound && (
                    <span className="score-entered">✓ {scores[playerIndex][currentRound - 1]}</span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="input-hint">Press Enter after each score to advance</p>
        </div>
      </div>

      <div className="scorecard-actions">
        <button className="secondary-btn" onClick={undoLastScore}>
          <Undo2 size={18} />
          Undo
        </button>
        <button className="primary-btn" onClick={finishGame}>
          <Save size={18} />
          Finish Game
        </button>
      </div>
    </div>
  );
};

export default Scorecard;
