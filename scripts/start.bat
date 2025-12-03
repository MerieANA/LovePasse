@echo off
REM Wrapper pour lancer le script PowerShell (Windows cmd)
SET PORT=%1
powershell -ExecutionPolicy Bypass -File "%~dp0start.ps1" %PORT%
