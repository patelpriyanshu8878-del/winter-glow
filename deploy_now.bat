@echo off
echo ==========================================
echo       Winter Glow - Deployment Script
echo ==========================================

echo [1/3] Syncing with GitHub...
git push origin main

echo [2/3] Deploying to Vercel...
echo NOTE: If asked to log in, please follow the browser instructions.
echo NOTE: If asked to "Set up and deploy", press Y (Yes).
echo NOTE: Accept default settings by pressing Enter.

call npx vercel --prod

echo ==========================================
echo Deployment Complete!
echo Please find the Production link above.
echo ==========================================
pause
