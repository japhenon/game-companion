# Complete Game Companion

A comprehensive game reference tool for families and game enthusiasts that provides rules, score tracking, timers, and resources for board games and card games - all in one place.

## Features

### ✅ v1.0 - Current Version

- **35+ Games Catalog** - Classic and modern board games, card games, and dice games
- **Smart Game Browser** - Search and filter by category, player count, duration
- **Favorites** - Star your favorite games for quick access
- **Score Tracking** - Multi-player, multi-round scorecard with keyboard support
- **Game Timer** - Countdown timer with pause/resume for timed games
- **Rules Access** - Direct links to official game rules
- **Session Persistence** - Automatically saves your game sessions
- **Mobile-First Design** - Optimized for phones, tablets, and desktop

### 🔧 Key Fixes in v1.0
- **Enter Key Navigation** - Press Enter to advance between players and rounds (no more clicking!)
- **Auto-Focus** - Smooth flow through score entry
- **Undo Support** - Fix scoring mistakes easily

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/complete-game-companion.git

# Navigate to project
cd complete-game-companion

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:3000` to see the app.

### Build for Production

```bash
npm run build
```

Deploy the `build` folder to GitHub Pages, Netlify, or any static hosting service.

## Usage

### Finding a Game
1. Use the search bar to find games by name
2. Filter by category (Card, Board, Dice)
3. Star favorites for quick access

### Tracking Scores
1. Select a game from the browser
2. Click "Start Scorecard"
3. Add player names
4. Enter scores and press Enter after each entry
5. Automatically advances to next player/round
6. View running totals and winner in real-time

### Using the Timer
1. Select a game with timer support
2. Click "Start Timer"
3. Adjust time as needed with +/- buttons
4. Pause/resume as needed
5. Audio alert when time expires

## Tech Stack

- **Frontend**: React 18.2 with functional components
- **Icons**: Lucide React
- **Storage**: Browser localStorage
- **Hosting**: Static (GitHub Pages compatible)
- **No backend required** - All data stored locally

## Project Structure

```
complete-game-companion/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GameBrowser.jsx      # Browse/search games
│   │   ├── GameDetail.jsx       # Game information
│   │   ├── PlayerSetup.jsx      # Add players
│   │   ├── Scorecard.jsx        # Score tracking
│   │   └── Timer.jsx            # Game timer
│   ├── data/
│   │   └── games.js             # Game catalog (35+ games)
│   ├── utils/
│   │   └── storage.js           # localStorage utilities
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Styles
│   └── index.js                 # Entry point
├── CLAUDE.md                    # Development standards
├── ROADMAP.md                   # Future plans
└── package.json
```

## Development

### Standards
- Functional components with hooks only
- Components under 200 lines
- Mobile-first responsive design
- Score tracking supports keyboard input (Enter key)
- See `CLAUDE.md` for complete standards

### Priority Order
1. Critical bugs
2. UX issues
3. Core features
4. New games
5. Polish

## Roadmap

### v1.1 (Next - Bug Fixes & Quick Wins)
- [ ] Game history view with statistics
- [ ] Export scorecard as image
- [ ] Improved game filtering (multi-select)
- [ ] Quick-start for 2-player games
- [ ] Add 10 more games (total: 45)

### v1.2 (Core Feature Enhancement)
- [ ] Custom game creation
- [ ] Multiple simultaneous sessions
- [ ] Score calculation helpers
- [ ] Game recommendations
- [ ] Dark mode
- [ ] Add 10 more games (total: 55)

### v2.0 (Major Features)
- [ ] Advanced statistics dashboard
- [ ] Social features (share scorecards)
- [ ] Achievements system
- [ ] Offline PWA support
- [ ] Expand to 75+ games

See `ROADMAP.md` for detailed planning.

## Contributing

Contributions are welcome! Please:
1. Read `CLAUDE.md` for development standards
2. Follow the priority order
3. Keep components under 200 lines
4. Test on mobile devices
5. Ensure Enter key works in score tracking

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Game rules links provided by official publishers
- Icons by [Lucide](https://lucide.dev/)
- Built with React

## Contact

Questions or feedback? Open an issue on GitHub.

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Status**: ✅ Production Ready
