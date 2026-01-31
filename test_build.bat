@echo off
call npm run build > build_output.log 2>&1
echo Done running build, errorlevel: %errorlevel% >> build_output.log
