# Complete Game Companion - Development Standards

## Priority Order
All development work follows this strict priority order:
1. **Critical bugs** - Issues that break core functionality
2. **UX issues** - Problems that significantly impact user experience
3. **Core features** - Essential functionality improvements
4. **New games** - Adding games to the catalog
5. **Polish** - Visual improvements and nice-to-haves

## Technical Standards

### React Components
- **Functional components only** with hooks (useState, useEffect, useRef, etc.)
- **Components under 200 lines** - Split into smaller components if exceeded
- **Props validation** - Clear prop requirements documented
- **Meaningful names** - Components named by what they do (e.g., `GameBrowser`, `Scorecard`)

### Code Organization
```
src/
  components/     # Reusable UI components
  data/          # Game catalog and constants
  utils/         # Helper functions (storage, etc.)
  App.jsx        # Main app component
  App.css        # Main styles
```

### Mobile-First Design
- All components designed for mobile first
- Touch targets minimum **44px x 44px**
- Responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Test on actual mobile devices

### Score Tracking Requirements
- **Keyboard input support** - Enter key advances to next player/round
- **Auto-focus** - Move focus automatically for smooth flow
- **Visual feedback** - Show entered scores immediately
- **Undo functionality** - Allow users to fix mistakes
- **localStorage persistence** - Save sessions automatically

### Game Data Structure
Each game must include:
```javascript
{
  id: string,              // Unique identifier
  name: string,            // Display name
  category: string,        // Classic Card, Modern Board, etc.
  players: {               // Player range
    min: number,
    max: number
  },
  duration: number,        // Minutes
  icon: string,            // Lucide icon name
  rulesLinks: [{           // Official rules
    text: string,
    url: string
  }],
  scoringType: string,     // 'highest', 'lowest', 'custom'
  hasTimer: boolean        // Whether game needs timer
}
```

## Development Workflow

### Before Adding Features
1. Check if it fits priority order
2. Estimate complexity and user value
3. Verify it aligns with existing patterns
4. Check for similar existing functionality

### Testing Checklist
- [ ] Works on mobile (< 640px width)
- [ ] Works on tablet (640-1024px)
- [ ] Works on desktop (> 1024px)
- [ ] Touch targets are 44px minimum
- [ ] Keyboard navigation works
- [ ] localStorage persists correctly
- [ ] No console errors
- [ ] Components under 200 lines

### Code Review Standards
- Clear, descriptive variable names
- Comments for complex logic only
- No unused imports or variables
- Consistent formatting (2 spaces, semicolons)
- CSS follows BEM-like naming

## Known Issues

### v1.0 Issues
- ✅ **FIXED** - Scorecard Enter key bug (Enter key now properly advances players/rounds)

## Feature Requests Log
Track all feature requests here with priority assessment:

### High Priority
- Game history view with stats
- Export scorecard as image/PDF
- Dark mode

### Medium Priority
- Custom game creation
- Multi-session support (track multiple games)
- Game recommendations based on player count

### Low Priority
- Social sharing
- Achievements/badges
- Sound effects

## Adding New Games

### Game Addition Checklist
1. Find official rules link
2. Determine correct category
3. Verify player count and duration
4. Choose appropriate Lucide icon
5. Set correct scoring type
6. Test in game browser
7. Verify game detail page

### Categories
- Classic Card
- Modern Card
- Classic Board
- Modern Board
- Dice

## Architecture Decisions

### Why No Backend?
- Simplicity for users (no signup required)
- Fast loading (static hosting)
- Privacy (data stays local)
- Easy deployment (GitHub Pages)

### Why localStorage?
- Persists sessions across page refreshes
- Simple API
- Good browser support
- Appropriate for personal data

### Why Functional Components?
- Modern React best practice
- Simpler than class components
- Better performance with hooks
- Easier to test and reason about

## Performance Guidelines
- Minimize re-renders (useMemo, useCallback when needed)
- Lazy load images if added
- Keep bundle size under 500KB
- Test on slower devices/networks

## Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Focus indicators visible

## Git Workflow
- Main branch is production-ready
- Feature branches for new work
- Descriptive commit messages
- Small, focused commits
- Test before merging

## Deployment
- Build: `npm run build`
- Test build locally before deploying
- Deploy to GitHub Pages or similar
- Verify all features work in production

## Support
For questions or issues:
1. Check this document first
2. Review existing code patterns
3. Test your assumptions
4. Ask specific questions with context
