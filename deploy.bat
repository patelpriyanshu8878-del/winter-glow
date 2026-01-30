@echo off
echo Committing changes...
git add .
git commit -m "Fix project configuration and dependencies"

echo Configuring remote...
git branch -M main
git remote query origin
if %ERRORLEVEL% NEQ 0 git remote add origin https://github.com/patelpriyanshu8878-del/winter-glow.git
git remote set-url origin https://github.com/patelpriyanshu8878-del/winter-glow.git

echo Pushing to GitHub...
git push -u origin main

echo Deploying to Vercel...
call npx vercel --prod

pause
