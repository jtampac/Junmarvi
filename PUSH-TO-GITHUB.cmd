@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ============================================
echo   Junmarvi Website - Push to GitHub
echo ============================================
echo.

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 goto :notrepo

echo Staging changes...
git add -A
if errorlevel 1 goto :addfail

git diff --cached --quiet
if not errorlevel 1 goto :nochanges

set "MSG="
set /p "MSG=Enter commit message: "
if not defined MSG goto :emptymsg

git commit -m "%MSG%"
if errorlevel 1 goto :commitfail
goto :push

:nochanges
echo No new changes to commit. Pushing any unpushed commits...

:push
echo.
echo Pushing to origin/main...
git push origin main
if errorlevel 1 goto :pushfail

echo.
echo ============================================
echo   [SUCCESS] Pushed to origin/main.
echo ============================================
pause
exit /b 0

:notrepo
echo [ERROR] This folder is not a git repository.
goto :fail

:addfail
echo [ERROR] git add failed. Nothing was committed or pushed.
goto :fail

:emptymsg
echo [ERROR] Commit message cannot be empty. Nothing was committed.
goto :fail

:commitfail
echo [ERROR] git commit failed. Nothing was pushed.
goto :fail

:pushfail
echo.
echo ============================================
echo   [PUSH FAILED] Your changes were NOT uploaded to GitHub.
echo   Read the error message above, fix it, then run this
echo   script again.
echo ============================================

:fail
pause
exit /b 1
