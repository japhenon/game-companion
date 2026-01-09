// localStorage utilities for Complete Game Companion

const STORAGE_KEYS = {
  CURRENT_SESSION: 'cgc_current_session',
  HISTORY: 'cgc_history',
  FAVORITES: 'cgc_favorites',
  SETTINGS: 'cgc_settings'
};

export const storage = {
  // Get current session
  getCurrentSession: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading current session:', error);
      return null;
    }
  },

  // Save current session
  saveCurrentSession: (session) => {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(session));
    } catch (error) {
      console.error('Error saving current session:', error);
    }
  },

  // Clear current session
  clearCurrentSession: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    } catch (error) {
      console.error('Error clearing current session:', error);
    }
  },

  // Get game history
  getHistory: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading history:', error);
      return [];
    }
  },

  // Add to history
  addToHistory: (session) => {
    try {
      const history = storage.getHistory();
      history.unshift(session); // Add to beginning
      // Keep only last 50 games
      const trimmedHistory = history.slice(0, 50);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmedHistory));
    } catch (error) {
      console.error('Error adding to history:', error);
    }
  },

  // Get favorites
  getFavorites: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading favorites:', error);
      return [];
    }
  },

  // Toggle favorite
  toggleFavorite: (gameId) => {
    try {
      const favorites = storage.getFavorites();
      const index = favorites.indexOf(gameId);
      
      if (index > -1) {
        favorites.splice(index, 1);
      } else {
        favorites.push(gameId);
      }
      
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
      return favorites;
    } catch (error) {
      console.error('Error toggling favorite:', error);
      return storage.getFavorites();
    }
  },

  // Get settings
  getSettings: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : {
        darkMode: false,
        defaultPlayers: 2
      };
    } catch (error) {
      console.error('Error reading settings:', error);
      return { darkMode: false, defaultPlayers: 2 };
    }
  },

  // Save settings
  saveSettings: (settings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }
};
