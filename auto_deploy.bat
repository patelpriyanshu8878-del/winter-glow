@echo off
echo Pushing to GitHub...
git push origin main

echo Deploying to Vercel...
call npx vercel --prod --yes

pause
