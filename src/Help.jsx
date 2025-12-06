import { Link } from 'react-router-dom'
import './Help.css'

function Help() {
  return (
    <div className="app">
      <nav className="navbar" role="navigation" aria-label="Barre de navigation">
        <div className="nav-left">
          <span className="material-icons nav-logo" aria-hidden="true">favorite</span>
          <span className="nav-brand">LovePass</span>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/help" className="nav-link">Aide</Link>
        </div>
      </nav>

      <div className="container help-container">
        <header className="header">
          <h1 className="title">Aide & Guide d'utilisation</h1>
          <p className="subtitle">Tout ce que vous devez savoir sur LovePass</p>
        </header>

        <section className="help-section">
          <h2 className="section-title">Comment utiliser LovePass ?</h2>
          <div className="help-content">
            <div className="help-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Choisissez la longueur</h3>
                <p>Utilisez le curseur pour définir la longueur de votre mot de passe (entre 4 et 64 caractères). Nous recommandons au moins 12 caractères pour une sécurité optimale.</p>
              </div>
            </div>

            <div className="help-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Sélectionnez les types de caractères</h3>
                <p>Cochez les cases pour inclure :</p>
                <ul>
                  <li>Majuscules (A-Z)</li>
                  <li>Minuscules (a-z)</li>
                  <li>Chiffres (0-9)</li>
                  <li>Symboles (!@#$...)</li>
                </ul>
              </div>
            </div>

            <div className="help-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Générez votre mot de passe</h3>
                <p>Cliquez sur le bouton "Générer un mot de passe" pour créer un mot de passe aléatoire sécurisé.</p>
              </div>
            </div>

            <div className="help-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Copiez et utilisez</h3>
                <p>Cliquez sur l'icône de copie pour copier le mot de passe dans votre presse-papier, puis utilisez-le immédiatement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2 className="section-title">Qu'est-ce qu'un mot de passe sécurisé ?</h2>
          <div className="help-content">
            <p>Un mot de passe sécurisé doit :</p>
            <ul className="security-list">
              <li>Contenir au moins 12 caractères</li>
              <li>Mélanger majuscules, minuscules, chiffres et symboles</li>
              <li>Être unique pour chaque compte</li>
              <li>Ne pas contenir d'informations personnelles</li>
              <li>Ne pas utiliser de mots du dictionnaire</li>
            </ul>
          </div>
        </section>

        <section className="help-section">
          <h2 className="section-title">Indicateur de force</h2>
          <div className="help-content">
            <p>LovePass évalue la force de votre mot de passe en temps réel selon 6 critères :</p>
            <div className="strength-criteria-help">
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Au moins 8 caractères</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Au moins 12 caractères</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Contient une majuscule</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Contient une minuscule</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Contient un chiffre</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-icon">✓</span>
                <span>Contient un symbole</span>
              </div>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2 className="section-title">Option avancée</h2>
          <div className="help-content">
            <h3>Exclure les caractères ambigus</h3>
            <p>Cette option permet d'exclure les caractères qui peuvent être confondus visuellement :</p>
            <ul className="ambiguous-list">
              <li>I (i majuscule) et l (L minuscule) et 1 (chiffre un)</li>
              <li>O (o majuscule) et 0 (zéro) et o (o minuscule)</li>
            </ul>
            <p>Utile si vous devez saisir manuellement le mot de passe.</p>
          </div>
        </section>

        <section className="help-section faq-section">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="help-content">
            <div className="faq-item">
              <h3>LovePass stocke-t-il mes mots de passe ?</h3>
              <p>Non, LovePass ne stocke aucun mot de passe. Tout se passe dans votre navigateur. Les mots de passe générés ne sont jamais envoyés à un serveur.</p>
            </div>

            <div className="faq-item">
              <h3>Puis-je utiliser LovePass hors ligne ?</h3>
              <p>Oui, une fois la page chargée, LovePass fonctionne entièrement hors ligne.</p>
            </div>

            <div className="faq-item">
              <h3>Comment sauvegarder mes mots de passe ?</h3>
              <p>Nous recommandons d'utiliser un gestionnaire de mots de passe comme Bitwarden, 1Password ou LastPass pour stocker vos mots de passe de manière sécurisée.</p>
            </div>

            <div className="faq-item">
              <h3>À quelle fréquence dois-je changer mes mots de passe ?</h3>
              <p>Changez vos mots de passe immédiatement si vous soupçonnez qu'ils ont été compromis. Sinon, des mots de passe forts et uniques n'ont pas besoin d'être changés régulièrement.</p>
            </div>
          </div>
        </section>

        <section className="help-section contact-section">
          <h2 className="section-title">Besoin d'aide supplémentaire ?</h2>
          <div className="help-content">
            <p>Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.</p>
            <Link to="/" className="back-home-btn">Retour à l'accueil</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Help
