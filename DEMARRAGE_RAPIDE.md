# 🚀 Guide de Démarrage Rapide - Quiz Angular

## 📦 Installation

```bash
# Naviguer vers le dossier du projet
cd D:\igl1\OngularProject\Quiz-Game

# Installer les dépendances (si nécessaire)
npm install
```

## ▶️ Lancer l'Application

### Méthode 1 : Avec ouverture automatique du navigateur
```bash
ng serve --open
```

### Méthode 2 : Sans ouverture automatique
```bash
ng serve
```
Puis ouvrir manuellement : http://localhost:4200

## 🛠️ Commandes Utiles

### Développement
```bash
# Démarrer le serveur de développement
ng serve

# Démarrer avec un port spécifique
ng serve --port 4300

# Mode verbose pour voir plus de logs
ng serve --verbose
```

### Build
```bash
# Build de production
ng build --configuration production

# Build de développement
ng build
```

### Tests
```bash
# Lancer les tests unitaires
ng test

# Lancer les tests avec couverture
ng test --code-coverage
```

### Génération de Composants
```bash
# Générer un nouveau composant
ng generate component nom-du-composant

# Version courte
ng g c nom-du-composant
```

## 📂 Structure du Projet

```
Quiz-Game/
├── src/
│   ├── app/
│   │   ├── models/              # Modèles de données
│   │   ├── home-component/      # Page d'accueil
│   │   ├── game-component/      # Jeu principal
│   │   ├── question-component/  # Question individuelle
│   │   ├── score-component/     # Résultats
│   │   ├── app.ts              # Composant racine
│   │   ├── app.routes.ts       # Configuration des routes
│   │   └── app.config.ts       # Configuration de l'app
│   ├── index.html              # Page HTML principale
│   ├── main.ts                 # Point d'entrée
│   └── styles.css              # Styles globaux
├── angular.json                # Configuration Angular
├── package.json                # Dépendances npm
└── tsconfig.json              # Configuration TypeScript
```

## 🌐 URLs de l'Application

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | HomeComponent | Page d'accueil |
| `/game` | GameComponent | Jeu de quiz |
| `/score` | ScoreComponent | Résultats finaux |

## 🎮 Comment Utiliser l'Application

1. **Page d'Accueil** (`/`)
   - Cliquer sur "Commencer le Quiz"

2. **Jeu** (`/game`)
   - Lire la question
   - Regarder le chronomètre (30 secondes)
   - Cliquer sur une réponse
   - Observer le feedback (vert = correct, rouge = incorrect)
   - Cliquer sur "Question suivante"
   - Répéter jusqu'à la fin

3. **Résultats** (`/score`)
   - Voir le score final
   - Consulter les statistiques
   - Choisir "Recommencer" ou "Retour à l'accueil"


## 📊 Système de Points

| Action | Points |
|--------|--------|
| Bonne réponse | +10 |
| Mauvaise réponse | -5 |
| Temps écoulé | -5 |

## 🎨 Indicateurs Visuels

### Chronomètre
- ⚪ Normal : Plus de 10 secondes
- 🟡 Warning : 10-6 secondes (animation pulse)
- 🔴 Danger : 5-0 secondes (animation shake)

### Boutons de Réponse
- 🟢 Vert : Réponse correcte
- 🔴 Rouge : Réponse incorrecte
- ⚫ Gris : Autres options (désactivées)

### Performance
- 🟢 Excellent : ≥ 80%
- 🔵 Bien : 60-79%
- 🟠 Moyen : 40-59%
- 🔴 Peut mieux faire : < 40%

**Bon quiz ! 🎯**
