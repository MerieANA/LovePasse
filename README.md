# LovePass - Générateur de mots de passe sécurisés

![LovePass](https://img.shields.io/badge/LovePass-Fiery%20Ocean-C1121F?style=for-the-badge)

Un générateur de mots de passe moderne et sécurisé 

##  Charte de couleurs

Le design utilise la palette "Fiery Ocean" :
- **#780000** - Rouge foncé
- **#C1121F** - Rouge vif (accent)
- **#FDF0D5** - Beige clair (fond)
- **#003049** - Bleu marine (primaire)
- **#669BBC** - Bleu clair (bordures)

##  Fonctionnalités

- **Génération sécurisée** : Création de mots de passe aléatoires robustes
- **Options personnalisables** :
  - Longueur du mot de passe (4 à 64 caractères)
  - Majuscules (A-Z)
  - Minuscules (a-z)
  - Chiffres (0-9)
  - Symboles (!@#$...)
  - Exclusion des caractères ambigus (ex : I, l, 1, O, 0) pour améliorer la lisibilité
- **Copie rapide** : Bouton pour copier le mot de passe dans le presse-papier
- **Interface responsive** : Fonctionne parfaitement sur mobile, tablette et desktop
- **Design moderne** : Interface élégante avec animations fluides
- **Conseils de sécurité** : Recommandations pour l'utilisation sécurisée des mots de passe

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool rapide et moderne
- **CSS3** - Styles personnalisés avec variables CSS et responsive design

## Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd lovepass
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

### Commandes simplifiées

Vous pouvez utiliser ces scripts npm pour démarrer plus facilement :

- Démarrer le serveur de développement (alias) :
```powershell
npm start
```

- Démarrer le serveur de développement sur un port spécifique (PowerShell) :
```powershell
$env:PORT=3000; npm run dev
```
ou en utilisant le script `dev:port` (remplacer 3000 par le port désiré) :
```powershell
npm run dev:port -- 3000
```

- Construire et prévisualiser la version de production :
```powershell
npm run start:prod
```

### Démarrage automatisé (script)

J'ai ajouté un petit script PowerShell `scripts/start.ps1` et un wrapper batch `scripts/start.bat` pour automatiser l'installation (si nécessaire) et le démarrage.

- Lancer l'automatisation (installe si besoin puis démarre le dev) :
```powershell
npm run auto-start
```

- Lancer l'automatisation sur un port précis (ex. 3000) :
```powershell
npm run auto-start -- 3000
```
ou directement :
```powershell
powershell -ExecutionPolicy Bypass -File ./scripts/start.ps1 3000
```

Le script fait :
- vérifie la présence de `node_modules` et exécute `npm install` si nécessaire
- définit la variable d'environnement `PORT` si un port est fourni
- lance `npm run dev`

Vous pouvez modifier `scripts/start.ps1` si vous voulez ajouter des étapes (ex : build, tests, lint avant démarrage). 

4. Ouvrez votre navigateur à l'adresse : `http://localhost:5173`

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production localement
- `npm run lint` - Vérifie le code avec ESLint

## Responsive Design

L'application est entièrement responsive avec des breakpoints optimisés :
- **Desktop** : Interface complète avec toutes les fonctionnalités
- **Tablette** (≤768px) : Layout adapté pour les écrans moyens
- **Mobile** (≤480px) : Interface compacte et tactile

## Sécurité

- Génération de mots de passe côté client (aucune donnée n'est envoyée au serveur)
- Utilisation de `Math.random()` pour la génération aléatoire
- Recommandations de bonnes pratiques de sécurité intégrées

## Utilisation

1. Sélectionnez les options souhaitées (types de caractères)
2. Ajustez la longueur du mot de passe avec le slider
3. Cliquez sur "Générer un mot de passe"
4. Copiez le mot de passe généré avec le bouton 

## Améliorations futures possibles

- Évaluation de la force du mot de passe
- Historique des mots de passe générés (stockage local)
- Export des mots de passe en fichier
- Thème sombre/clair
- Support multilingue
- Génération de phrases de passe (passphrases)

## Licence

Ce projet est libre d'utilisation pour des fins éducatives et personnelles.

## Auteur

Développé avec ❤️ 