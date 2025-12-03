import { useState, useEffect } from 'react'
import './App.css'

/**
 * Composant principal LovePass
 * Générateur de mots de passe sécurisés avec interface conviviale
 */
function App() {
  // État pour le mot de passe généré
  const [password, setPassword] = useState('')

  // État pour les options de génération
  const [options, setOptions] = useState({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  // État pour afficher le message de copie
  const [copied, setCopied] = useState(false)

  // Caractères disponibles pour la génération
  const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  }

  // Indicateur de force
  const [strength, setStrength] = useState({ score: 0, label: '', color: '#ddd' })

  const evaluateStrength = (pwd) => {
    if (!pwd) return { score: 0, label: '', color: '#ddd' }
    let score = 0
    // longueur
    if (pwd.length >= 8) score += 1
    if (pwd.length >= 12) score += 1
    // diversité
    if (/[A-Z]/.test(pwd)) score += 1
    if (/[a-z]/.test(pwd)) score += 1
    if (/[0-9]/.test(pwd)) score += 1
    if (/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(pwd)) score += 1

    // max score = 6
    let label = ''
    let color = '#ddd'
    if (score <= 1) {
      label = 'Très faible'
      color = '#e53935' // rouge
    } else if (score === 2) {
      label = 'Faible'
      color = '#ff7043' // orange
    } else if (score === 3) {
      label = 'Moyen'
      color = '#fbc02d' // jaune
    } else if (score === 4) {
      label = 'Bon'
      color = '#8bc34a' // vert clair
    } else {
      label = 'Très bon'
      color = '#2e7d32' // vert foncé
    }

    return { score, label, color }
  }

  useEffect(() => {
    setStrength(evaluateStrength(password))
  }, [password])

  /**
   * Génère un mot de passe aléatoire basé sur les options sélectionnées
   */
  const generatePassword = () => {
    let charset = ''
    let generatedPassword = ''

    // Construire le jeu de caractères selon les options
    if (options.includeUppercase) charset += characters.uppercase
    if (options.includeLowercase) charset += characters.lowercase
    if (options.includeNumbers) charset += characters.numbers
    if (options.includeSymbols) charset += characters.symbols

    // Vérifier qu'au moins une option est sélectionnée
    if (charset === '') {
      alert('Veuillez sélectionner au moins un type de caractère')
      return
    }

    // Générer le mot de passe
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      generatedPassword += charset[randomIndex]
    }

    setPassword(generatedPassword)
    setCopied(false)
  }

  /**
   * Copie le mot de passe dans le presse-papier
   */
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  /**
   * Met à jour les options de génération
   */
  const handleOptionChange = (option, value) => {
    setOptions({
      ...options,
      [option]: value
    })
  }

  return (
    <div className="app">
      <div className="container">
        {/* En-tête */}
        <header className="header">
          <h1 className="title">LovePass</h1>
          <p className="subtitle">Générateur de mots de passe sécurisés</p>
        </header>

        {/* Zone d'affichage du mot de passe */}
        <div className="password-display">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Cliquez sur 'Générer' pour créer un mot de passe"
            className="password-input"
          />
          <button
            onClick={copyToClipboard}
            className="copy-btn"
            disabled={!password}
            title="Copier"
          >
            {copied ? (
              <span className="material-icons" aria-hidden="true">check</span>
            ) : (
              <span className="material-icons" aria-hidden="true">content_copy</span>
            )}
          </button>
        </div>

        {/* Indicateur de force */}
        <div className="strength-meter" aria-hidden={password ? 'false' : 'true'}>
          <div
            className="strength-bar"
            style={{ width: `${(strength.score / 6) * 100}%`, background: strength.color }}
          />
          <div className="strength-label">{strength.label}</div>
        </div>

        {copied && <p className="copied-message">Mot de passe copié !</p>}

        {/* Options de génération */}
        <div className="options">
          <div className="option-group">
            <label className="length-label">
              Longueur: <span className="length-value">{options.length}</span>
            </label>
            <input
              type="range"
              min="4"
              max="64"
              value={options.length}
              onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
              className="slider"
            />
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={options.includeUppercase}
                onChange={(e) => handleOptionChange('includeUppercase', e.target.checked)}
              />
              <span>Majuscules (A-Z)</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={options.includeLowercase}
                onChange={(e) => handleOptionChange('includeLowercase', e.target.checked)}
              />
              <span>Minuscules (a-z)</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={options.includeNumbers}
                onChange={(e) => handleOptionChange('includeNumbers', e.target.checked)}
              />
              <span>Chiffres (0-9)</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={options.includeSymbols}
                onChange={(e) => handleOptionChange('includeSymbols', e.target.checked)}
              />
              <span>Symboles (!@#$...)</span>
            </label>
          </div>
        </div>

        {/* Bouton de génération */}
        <button onClick={generatePassword} className="generate-btn">
          Générer un mot de passe
        </button>

        {/* Conseils de sécurité */}
        <div className="tips">
          <h3><span className="material-icons" aria-hidden="true">lightbulb</span> Conseils de sécurité</h3>
          <ul>
            <li>Utilisez des mots de passe d'au moins 12 caractères</li>
            <li>Ne réutilisez jamais le même mot de passe</li>
            <li>Activez l'authentification à deux facteurs quand c'est possible</li>
            <li>Utilisez un gestionnaire de mots de passe</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
