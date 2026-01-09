#!/bin/bash

# Complete Game Companion - Installation Verification Script

echo "========================================="
echo "Complete Game Companion - Verification"
echo "========================================="
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "   Please run this script from the complete-game-companion directory"
    exit 1
fi

echo "✅ Found package.json"

# Check for required files
REQUIRED_FILES=(
    "src/App.jsx"
    "src/components/GameBrowser.jsx"
    "src/components/Scorecard.jsx"
    "src/data/games.js"
    "src/utils/storage.js"
    "README.md"
    "CLAUDE.md"
    "ROADMAP.md"
)

echo ""
echo "Checking required files..."
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
    fi
done

# Check Node.js
echo ""
echo "Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✅ Node.js installed: $NODE_VERSION"
else
    echo "❌ Node.js not found. Please install Node.js 14+"
    exit 1
fi

# Check npm
echo ""
echo "Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "✅ npm installed: $NPM_VERSION"
else
    echo "❌ npm not found"
    exit 1
fi

# Check if node_modules exists
echo ""
if [ -d "node_modules" ]; then
    echo "✅ Dependencies already installed"
else
    echo "⚠️  Dependencies not installed yet"
    echo "   Run: npm install"
fi

# Count games
echo ""
GAME_COUNT=$(grep -c "id: '" src/data/games.js || echo "0")
echo "📊 Games in catalog: $GAME_COUNT"

# Count components
echo ""
COMPONENT_COUNT=$(ls -1 src/components/*.jsx 2>/dev/null | wc -l || echo "0")
echo "🧩 Components: $COMPONENT_COUNT"

# Summary
echo ""
echo "========================================="
echo "Summary"
echo "========================================="
echo "Status: Ready for development"
echo ""
echo "Next steps:"
echo "1. npm install     (if not done)"
echo "2. npm start       (start dev server)"
echo "3. npm run build   (production build)"
echo ""
echo "Documentation:"
echo "- README.md        (project overview)"
echo "- QUICKSTART.md    (3-step setup)"
echo "- CLAUDE.md        (dev standards)"
echo "- ROADMAP.md       (future plans)"
echo ""
echo "🎮 Happy gaming!"
