# Quick Start Guide - Complete Game Companion

## Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Lucide React 0.263.1
- React Scripts 5.0.1

### Step 2: Start Development Server
```bash
npm start
```

The app will open at http://localhost:3000

### Step 3: Start Using!
1. Browse 35+ games in the catalog
2. Search or filter by category
3. Select a game to view details
4. Start a scorecard or timer
5. Track scores with Enter key navigation
6. View game history

## What's Included

### ✅ Fixed Features
- **Enter Key Bug FIXED** - Press Enter to advance between players ✅
- **Score Tracking** - Multi-round, multi-player with running totals
- **Timer** - Countdown timer with pause/reset
- **Game Browser** - Search and filter 35+ games
- **History** - View all past game sessions
- **Favorites** - Mark and quickly access favorite games

### 📱 Mobile Optimized
- Touch-friendly interface (44px minimum targets)
- Bottom navigation for one-handed use
- Responsive design for all screen sizes
- No horizontal scrolling

### 💾 Data Persistence
- All data stored in browser localStorage
- Sessions automatically saved
- History preserved between visits
- No server required

## File Structure

```
complete-game-companion/
├── src/
│   ├── components/
│   │   ├── GameBrowser.jsx    - Browse/search games
│   │   ├── GameDetail.jsx     - Game info and rules
│   │   ├── PlayerSetup.jsx    - Add players before game
│   │   ├── Scorecard.jsx      - Score tracking (Enter key fixed!)
│   │   ├── Timer.jsx          - Game timer
│   │   └── History.jsx        - Past game sessions
│   ├── data/
│   │   └── games.js           - 35+ game catalog
│   ├── utils/
│   │   └── storage.js         - localStorage helpers
│   ├── App.jsx                - Main app component
│   ├── App.css                - Global styles
│   └── index.js               - Entry point
├── public/
│   ├── index.html
│   └── manifest.json
├── package.json
├── README.md                   - Full documentation
├── CLAUDE.md                   - Development standards
└── .gitignore

```

## Key Features Explained

### Enter Key Navigation (Bug Fix ✅)
When entering scores:
1. Type score for current player
2. Press **Enter** (not Tab, not clicking)
3. Automatically moves to next player
4. Input clears for new entry
5. After last player, new round starts

**Implementation:**
```javascript
const handleKeyDown = (e, playerIndex) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const value = e.target.value;
    if (value.trim() !== '') {
      handleScoreInput(playerIndex, value);
      e.target.value = '';
    }
  }
};
```

### Game Catalog
35+ games organized by category:
- **Classic Card** (10) - Poker, Rummy, Spades, Hearts, Cribbage, etc.
- **Modern Card** (8) - Uno, Phase 10, Sushi Go, Love Letter, etc.
- **Classic Board** (8) - Chess, Scrabble, Monopoly, Risk, etc.
- **Modern Board** (10) - Catan, Ticket to Ride, Pandemic, Azul, etc.
- **Dice** (5) - Yahtzee, Farkle, Qwixx, etc.

### Score Tracking Flow
1. Select game → View details
2. Tap "Start Scorecard"
3. Add player names (2-10 players based on game)
4. Enter scores each round
5. Press Enter to advance
6. View running totals
7. Undo last score if needed
8. End game to save to history

### Timer Usage
1. Select game with timer support
2. Tap "Start Timer" 
3. Choose duration (presets or custom)
4. Start/pause/reset as needed
5. Audio notification when time expires (if permissions granted)

## Building for Production

```bash
npm run build
```

Creates optimized build in `/build` folder ready for:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## Common Tasks

### Add a New Game
Edit `src/data/games.js`:
```javascript
{
  id: 'game-name',
  name: 'Game Name',
  category: 'Modern Board',
  players: { min: 2, max: 4 },
  duration: 45,
  icon: 'Hexagon',  // Lucide icon name
  rulesLinks: [
    { text: 'Rules', url: 'https://...' }
  ],
  scoringType: 'highest',
  hasTimer: false
}
```

### Customize Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #4CAF50;     /* Main green */
  --secondary: #2196F3;   /* Blue */
  --accent: #FF9800;      /* Orange */
}
```

### Clear All Data
Open browser console:
```javascript
localStorage.clear();
location.reload();
```

## Troubleshooting

### Port 3000 Already in Use
```bash
PORT=3001 npm start
```

### localStorage Not Working
- Check browser privacy settings
- Ensure not in Incognito/Private mode
- Some browsers block localStorage

### Styles Not Loading
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

## Next Steps (Roadmap)

### v1.2 - Coming Soon
- [ ] Multi-select category filters
- [ ] Export scorecard as image/text
- [ ] Quick-start for 2-player games
- [ ] Game statistics dashboard
- [ ] 10 more games (total: 45)

### v2.0 - Future
- [ ] Custom game creation
- [ ] Score calculation helpers
- [ ] Dark mode
- [ ] Social sharing
- [ ] 75+ games total

## Development Standards

See `CLAUDE.md` for complete development standards including:
- Priority order (Bugs → UX → Features → Games → Polish)
- Component standards (max 200 lines)
- Mobile-first design principles
- Keyboard accessibility requirements
- localStorage schema
- Testing checklist

## Support

- 📖 Full docs: `README.md`
- 🔧 Dev standards: `CLAUDE.md`
- 🐛 Issues: Open GitHub issue
- 💡 Feature requests: Submit PR

---

**Ready to play! 🎲**
