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
    ,excludeAmbiguous: false
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
  const [strength, setStrength] = useState({
    score: 0,
    label: '',
    color: '#ddd',
    criteria: {
      length8: false,
      length12: false,
      hasUpper: false,
      hasLower: false,
      hasNumber: false,
      hasSymbol: false
    }
  })

  const evaluateStrength = (pwd) => {
    if (!pwd) return { score: 0, label: '', color: '#ddd', criteria: {} }

    const criteria = {
      length8: pwd.length >= 8,
      length12: pwd.length >= 12,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd),
      hasSymbol: /[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(pwd)
    }

    let score = 0
    // points pondérés
    if (criteria.length8) score += 1
    if (criteria.length12) score += 1
    if (criteria.hasUpper) score += 1
    if (criteria.hasLower) score += 1
    if (criteria.hasNumber) score += 1
    if (criteria.hasSymbol) score += 1

    // label & color
    let label = ''
    let color = '#ddd'
    if (score <= 1) {
      label = 'Très faible'
      color = '#e53935'
    } else if (score === 2) {
      label = 'Faible'
      color = '#ff7043'
    } else if (score === 3) {
      label = 'Moyen'
      color = '#fbc02d'
    } else if (score === 4) {
      label = 'Bon'
      color = '#8bc34a'
    } else {
      label = 'Très bon'
      color = '#2e7d32'
    }

    return { score, label, color, criteria }
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

    // Exclure les caractères ambigus si demandé
    if (options.excludeAmbiguous && charset) {
      const ambiguous = 'Il1O0oO'
      charset = charset
        .split('')
        .filter((c, i, arr) => !ambiguous.includes(c))
        .join('')
    }

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
      <nav className="navbar" role="navigation" aria-label="Barre de navigation">
        <div className="nav-left">
          <span className="material-icons nav-logo" aria-hidden="true">favorite</span>
          <span className="nav-brand">LovePass</span>
        </div>
        <div className="nav-right">
          <a href="#" className="nav-link">Accueil</a>
          <a href="#" className="nav-link">Aide</a>
        </div>
      </nav>

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

        {copied && <p className="copied-message">Mot de passe copié !</p>}

        <div className="main-content-row">
          {/* Indicateur de force */}
          <div className="strength-meter" aria-hidden={password ? 'false' : 'true'}>
            <div className="strength-details" aria-live="polite">
              <div className="strength-criteria-section">
                <ul>
                  <li className={strength.criteria.length8 ? 'ok' : 'bad'}>≥ 8 caractères</li>
                  <li className={strength.criteria.length12 ? 'ok' : 'bad'}>≥ 12 caractères</li>
                  <li className={strength.criteria.hasUpper ? 'ok' : 'bad'}>Contient une majuscule</li>
                  <li className={strength.criteria.hasLower ? 'ok' : 'bad'}>Contient une minuscule</li>
                  <li className={strength.criteria.hasNumber ? 'ok' : 'bad'}>Contient un chiffre</li>
                  <li className={strength.criteria.hasSymbol ? 'ok' : 'bad'}>Contient un symbole</li>
                </ul>
              </div>

              <div className="strength-tip">
                {strength.score <= 2 && (
                  <p className="tip-weak">⚠️ <strong>Très faible :</strong> Augmentez la longueur et variez les types de caractères.</p>
                )}
                {strength.score >= 3 && strength.score < 5 && (
                  <p className="tip-medium">💡 <strong>Moyen :</strong> Visez au moins 12 caractères avec majuscules, minuscules, chiffres et symboles.</p>
                )}
                {strength.score >= 5 && (
                  <p className="tip-strong">✅ <strong>Excellent :</strong> Ce mot de passe est très sécurisé. Sauvegardez-le dans un gestionnaire!</p>
                )}
              </div>
            </div>
          </div>

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

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={options.excludeAmbiguous}
                onChange={(e) => handleOptionChange('excludeAmbiguous', e.target.checked)}
              />
              <span>Exclure caractères ambigus (I, l, 1, O, 0, o)</span>
            </label>
          </div>
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
