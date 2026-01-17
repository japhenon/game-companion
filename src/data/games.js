// Game catalog for Complete Game Companion - UPDATED
export const GAMES = [
  // Classic Card Games
  {
    id: 'poker',
    name: 'Poker',
    category: 'Classic Card',
    players: { min: 2, max: 10 },
    age: '10+',
    duration: 60,
    icon: 'Spade',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/poker' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'rummy',
    name: 'Rummy',
    category: 'Classic Card',
    players: { min: 2, max: 6 },
    age: '7+',
    duration: 30,
    icon: 'Club',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/rummy-rum' }
    ],
    scoringType: 'lowest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'spades',
    name: 'Spades',
    category: 'Classic Card',
    players: { min: 4, max: 4 },
    age: '10+',
    duration: 45,
    icon: 'Spade',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/spades' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'hearts',
    name: 'Hearts',
    category: 'Classic Card',
    players: { min: 3, max: 6 },
    age: '8+',
    duration: 30,
    icon: 'Heart',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/hearts' }
    ],
    scoringType: 'lowest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'cribbage',
    name: 'Cribbage',
    category: 'Classic Card',
    players: { min: 2, max: 4 },
    age: '8+',
    duration: 30,
    icon: 'Diamond',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/cribbage' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'euchre',
    name: 'Euchre',
    category: 'Classic Card',
    players: { min: 4, max: 4 },
    age: '10+',
    duration: 30,
    icon: 'Club',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/euchre' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'gin-rummy',
    name: 'Gin Rummy',
    category: 'Classic Card',
    players: { min: 2, max: 2 },
    age: '8+',
    duration: 20,
    icon: 'Heart',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/gin-rummy' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'canasta',
    name: 'Canasta',
    category: 'Classic Card',
    players: { min: 2, max: 6 },
    age: '12+',
    duration: 60,
    icon: 'Diamond',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/canasta' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'pinochle',
    name: 'Pinochle',
    category: 'Classic Card',
    players: { min: 2, max: 4 },
    age: '12+',
    duration: 45,
    icon: 'Spade',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://bicyclecards.com/how-to-play/pinochle' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'bridge',
    name: 'Bridge',
    category: 'Classic Card',
    players: { min: 4, max: 4 },
    age: '12+',
    duration: 90,
    icon: 'Club',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.acbl.org/learn_page/how-to-play-bridge/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },

  // Modern Card Games
  {
    id: 'uno',
    name: 'Uno',
    category: 'Modern Card',
    players: { min: 2, max: 10 },
    age: '7+',
    duration: 30,
    icon: 'Layers',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.unorules.com/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'phase-10',
    name: 'Phase 10',
    category: 'Modern Card',
    players: { min: 2, max: 6 },
    age: '7+',
    duration: 90,
    icon: 'Target',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/phase-10' }
    ],
    scoringType: 'lowest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'skip-bo',
    name: 'Skip-Bo',
    category: 'Modern Card',
    players: { min: 2, max: 6 },
    age: '7+',
    duration: 30,
    icon: 'Zap',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/skip-bo' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'exploding-kittens',
    name: 'Exploding Kittens',
    category: 'Modern Card',
    players: { min: 2, max: 5 },
    age: '7+',
    duration: 15,
    icon: 'Flame',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.explodingkittens.com/pages/rules-kittens' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'sushi-go',
    name: 'Sushi Go!',
    category: 'Modern Card',
    players: { min: 2, max: 5 },
    age: '8+',
    duration: 15,
    icon: 'UtensilsCrossed',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://gamewright.com/pdfs/Rules/SushiGoTM-RULES.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'love-letter',
    name: 'Love Letter',
    category: 'Modern Card',
    players: { min: 2, max: 4 },
    age: '10+',
    duration: 20,
    icon: 'Mail',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.zmangames.com/en/products/love-letter/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'coup',
    name: 'Coup',
    category: 'Modern Card',
    players: { min: 2, max: 6 },
    age: '10+',
    duration: 15,
    icon: 'Shield',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.ultraboardgames.com/coup/game-rules.php' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'the-crew',
    name: 'The Crew',
    category: 'Modern Card',
    players: { min: 3, max: 5 },
    age: '10+',
    duration: 20,
    icon: 'Rocket',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.orderofgamers.com/games/the-crew/' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'apples-to-apples',
    name: 'Apples to Apples',
    category: 'Modern Card',
    players: { min: 4, max: 10 },
    age: '12+',
    duration: 30,
    icon: 'Apple',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/apples-to-apples' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },

  // Classic Board Games
  {
    id: 'chess',
    name: 'Chess',
    category: 'Classic Board',
    players: { min: 2, max: 2 },
    age: '6+',
    duration: 30,
    icon: 'Castle',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.chess.com/learn-how-to-play-chess' }
    ],
    scoringType: 'custom',
    hasTimer: true,
    hasScorecard: false
  },
  {
    id: 'checkers',
    name: 'Checkers',
    category: 'Classic Board',
    players: { min: 2, max: 2 },
    age: '6+',
    duration: 20,
    icon: 'CheckSquare',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/checkers' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'backgammon',
    name: 'Backgammon',
    category: 'Classic Board',
    players: { min: 2, max: 2 },
    age: '8+',
    duration: 30,
    icon: 'Grid3x3',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.bkgm.com/rules.html' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'scrabble',
    name: 'Scrabble',
    category: 'Classic Board',
    players: { min: 2, max: 4 },
    age: '8+',
    duration: 90,
    icon: 'Type',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://scrabble.hasbro.com/en-us/rules' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'monopoly',
    name: 'Monopoly',
    category: 'Classic Board',
    players: { min: 2, max: 8 },
    age: '8+',
    duration: 120,
    icon: 'Banknote',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.hasbro.com/common/instruct/monins.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'risk',
    name: 'Risk',
    category: 'Classic Board',
    players: { min: 2, max: 6 },
    age: '10+',
    duration: 120,
    icon: 'Globe',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.hasbro.com/common/instruct/risk.pdf' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'clue',
    name: 'Clue',
    category: 'Classic Board',
    players: { min: 3, max: 6 },
    age: '8+',
    duration: 60,
    icon: 'SearchCheck',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.hasbro.com/common/instruct/Clue_(2002).pdf' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'trivial-pursuit',
    name: 'Trivial Pursuit',
    category: 'Classic Board',
    players: { min: 2, max: 6 },
    age: '12+',
    duration: 90,
    icon: 'Brain',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.hasbro.com/common/instruct/TrivialPursuit.pdf' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },

  // Modern Board Games
  {
    id: 'catan',
    name: 'Catan',
    category: 'Modern Board',
    players: { min: 3, max: 4 },
    age: '10+',
    duration: 90,
    icon: 'Landmark',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.catan.com/understand-catan/game-rules' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'ticket-to-ride',
    name: 'Ticket to Ride',
    category: 'Modern Board',
    players: { min: 2, max: 5 },
    age: '8+',
    duration: 60,
    icon: 'Train',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://ncdn0.daysofwonder.com/tickettoride/en/img/tt_rules_2015_en.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'carcassonne',
    name: 'Carcassonne',
    category: 'Modern Board',
    players: { min: 2, max: 5 },
    age: '7+',
    duration: 45,
    icon: 'Map',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.zmangames.com/en/products/carcassonne/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'pandemic',
    name: 'Pandemic',
    category: 'Modern Board',
    players: { min: 2, max: 4 },
    age: '8+',
    duration: 45,
    icon: 'Activity',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.zmangames.com/en/products/pandemic/' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'azul',
    name: 'Azul',
    category: 'Modern Board',
    players: { min: 2, max: 4 },
    age: '8+',
    duration: 45,
    icon: 'Square',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.planbgames.com/en/news/24/azul-rules-english-.html' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'splendor',
    name: 'Splendor',
    category: 'Modern Board',
    players: { min: 2, max: 4 },
    age: '10+',
    duration: 30,
    icon: 'Gem',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://cdn.1j1ju.com/medias/7f/91/ba-splendor-rulebook.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: '7-wonders',
    name: '7 Wonders',
    category: 'Modern Board',
    players: { min: 3, max: 7 },
    age: '10+',
    duration: 30,
    icon: 'Building',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.7wonders.net/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'dominion',
    name: 'Dominion',
    category: 'Modern Board',
    players: { min: 2, max: 4 },
    age: '13+',
    duration: 30,
    icon: 'Crown',
    rulesLinks: [
      { text: 'Official Rules', url: 'http://riograndegames.com/games/dominion/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'kingdomino',
    name: 'Kingdomino',
    category: 'Modern Board',
    players: { min: 2, max: 4 },
    age: '8+',
    duration: 15,
    icon: 'LayoutGrid',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.blueorangegames.com/index.php/games/kingdomino' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'codenames',
    name: 'Codenames',
    category: 'Modern Board',
    players: { min: 4, max: 8 },
    age: '14+',
    duration: 15,
    icon: 'MessageSquare',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://czechgames.com/files/rules/codenames-rules-en.pdf' }
    ],
    scoringType: 'custom',
    hasTimer: true,
    hasScorecard: false
  },
  {
    id: 'blockbuster',
    name: 'Blockbuster',
    category: 'Modern Board',
    players: { min: 4, max: 8 },
    age: '12+',
    duration: 30,
    icon: 'Film',
    rulesLinks: [
      { text: 'Download Rules (PDF)', url: 'https://www.fgbradleys.com/rules/rules5/Blockbuster-rules.pdf' }
    ],
    scoringType: 'custom',
    hasTimer: true,
    hasScorecard: false
  },

  // Dice Games
  {
    id: 'yahtzee',
    name: 'Yahtzee',
    category: 'Dice',
    players: { min: 1, max: 10 },
    age: '8+',
    duration: 30,
    icon: 'Dice6',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.hasbro.com/common/instruct/Yahtzee.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'farkle',
    name: 'Farkle',
    category: 'Dice',
    players: { min: 2, max: 8 },
    age: '8+',
    duration: 30,
    icon: 'Dice5',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/farkle' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'qwixx',
    name: 'Qwixx',
    category: 'Dice',
    players: { min: 2, max: 5 },
    age: '8+',
    duration: 15,
    icon: 'Dice4',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.gamewright.com/pdfs/Rules/QwixxTM-RULES.pdf' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true
  },
  {
    id: 'left-right-center',
    name: 'Left Right Center',
    category: 'Dice',
    players: { min: 3, max: 12 },
    age: '5+',
    duration: 15,
    icon: 'Dice3',
    rulesLinks: [
      { text: 'Official Rules', url: 'https://www.officialgamerules.org/left-center-right' }
    ],
    scoringType: 'custom',
    hasTimer: false,
    hasScorecard: false
  },
  {
    id: 'bunco',
    name: 'Bunco',
    category: 'Dice',
    players: { min: 12, max: 12 },
    age: '8+',
    duration: 90,
    icon: 'Dice2',
    rulesLinks: [
      { text: 'How to Play Bunco', url: 'https://www.dicegamedepot.com/bunco-rules/' }
    ],
    scoringType: 'highest',
    hasTimer: false,
    hasScorecard: true,
    scorecardNote: 'Bunco uses a rotating table system. Track wins at each table. Players rotate after each round - winners move up, losers move down.'
  }
];

export const CATEGORIES = [
  'All Games',
  'Classic Card',
  'Modern Card',
  'Classic Board',
  'Modern Board',
  'Dice'
];
