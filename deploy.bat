@echo off
call npm run build
cd dist
type nul > .nojekyll
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:lingling1989r/ai-photo-studio.git master:gh-pages
cd ..