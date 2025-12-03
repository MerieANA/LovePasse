param(
  [int]$Port
)

# Chemin du projet (dossier courant)
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $projectDir

Write-Host "[lovePass] Dossier projet: $projectDir"

# Installer les dépendances si nécessaire
if (-not (Test-Path -Path "node_modules")) {
  Write-Host "[lovePass] node_modules absent — installation des dépendances..."
  npm install
} else {
  Write-Host "[lovePass] node_modules présent — pas d'installation requise."
}

# Définir le port si fourni
if ($Port) {
  Write-Host "[lovePass] Démarrage en mode dev sur le port $Port"
  $env:PORT = $Port
} else {
  Write-Host "[lovePass] Démarrage en mode dev (port par défaut)."
}

# Lancer le serveur de développement
Write-Host "[lovePass] Lancement de 'npm run dev'..."
npm run dev
