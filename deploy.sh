#!/bin/bash

# Complete Game Companion - GitHub Pages Deployment Script

echo "========================================="
echo "Complete Game Companion - Deploy to GitHub Pages"
echo "========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "   Please run this script from the complete-game-companion directory"
    exit 1
fi

echo "✅ Found package.json"
echo ""

# Check if gh-pages is installed
if ! grep -q "gh-pages" package.json; then
    echo "Installing gh-pages..."
    npm install --save-dev gh-pages
    echo ""
fi

# Ask for confirmation
echo "This will:"
echo "1. Build the production version of the app"
echo "2. Deploy it to GitHub Pages"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled"
    exit 0
fi

echo ""
echo "Building app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ Build successful"
echo ""
echo "Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================="
    echo "✅ Deployment successful!"
    echo "========================================="
    echo ""
    echo "Your app should be live at:"
    echo "https://YOUR_USERNAME.github.io/complete-game-companion/"
    echo ""
    echo "Note: It may take 1-2 minutes for changes to appear"
else
    echo ""
    echo "❌ Deployment failed"
    echo ""
    echo "Common issues:"
    echo "1. Make sure you've pushed your code to GitHub first"
    echo "2. Check that GitHub Pages is enabled in repo settings"
    echo "3. Verify you have permission to deploy"
fi
