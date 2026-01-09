import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw, Plus, Minus } from 'lucide-react';

const Timer = ({ game, onBack }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(game.duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(game.duration * 60);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeInSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTimeInSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            playAlertSound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeInSeconds]);

  const playAlertSound = () => {
    // Simple beep using Web Audio API
    if (typeof window !== 'undefined' && window.AudioContext) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeInSeconds(initialTime);
  };

  const addMinute = () => {
    setTimeInSeconds(prev => prev + 60);
    setInitialTime(prev => prev + 60);
  };

  const removeMinute = () => {
    if (timeInSeconds >= 60) {
      setTimeInSeconds(prev => prev - 60);
      setInitialTime(prev => Math.max(60, prev - 60));
    }
  };

  const progress = ((initialTime - timeInSeconds) / initialTime) * 100;

  return (
    <div className="timer">
      <div className="timer-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1>{game.name}</h1>
      </div>

      <div className="timer-content">
        <div className="timer-display">
          <svg className="timer-circle" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="10"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          <div className="timer-text">
            <span className={`time ${timeInSeconds === 0 ? 'expired' : ''}`}>
              {formatTime(timeInSeconds)}
            </span>
            {timeInSeconds === 0 && <span className="expired-text">Time's Up!</span>}
          </div>
        </div>

        <div className="timer-controls">
          <button className="timer-btn" onClick={toggleTimer}>
            {isRunning ? <Pause size={24} /> : <Play size={24} />}
            <span>{isRunning ? 'Pause' : 'Start'}</span>
          </button>
          <button className="timer-btn" onClick={resetTimer}>
            <RotateCcw size={24} />
            <span>Reset</span>
          </button>
        </div>

        <div className="timer-adjust">
          <button className="adjust-btn" onClick={removeMinute}>
            <Minus size={20} />
          </button>
          <span className="adjust-label">Adjust Time</span>
          <button className="adjust-btn" onClick={addMinute}>
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
