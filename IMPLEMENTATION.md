# Application Quiz Interactif 🎯

Une application web interactive développée avec **Angular** qui permet aux utilisateurs de tester leurs connaissances à travers un système de quiz dynamique avec gestion du temps et scoring en temps réel.

## 📋 Fonctionnalités Principales

### ✅ Fonctionnalités Implémentées

1. **Gestion des Questions**
   - Affichage de questions à choix multiples
   - Support de différents types de questions
   - Base de données de questions avec réponses correctes

2. **Système de Scoring**
   - Attribution de **+10 points** pour chaque réponse correcte
   - Déduction de **-5 points** pour les réponses incorrectes
   - Affichage du score en temps réel

3. **Statistiques en Temps Réel (Défi 2)** ⭐
   - Nombre de bonnes réponses
   - Nombre de mauvaises réponses
   - Score actuel

4. **Chronomètre par Question (Défi 3)** ⏱️
   - **30 secondes** par question
   - Compte à rebours visible
   - Indicateurs visuels (warning à 10s, danger à 5s)
   - Réponse automatiquement comptée comme incorrecte si le temps expire

5. **Blocage des Réponses (Défi 1)** 🔒
   - Impossibilité de répondre deux fois à la même question
   - Verrouillage automatique après la sélection d'une réponse

6. **Data Binding**
   - **Interpolation** : Affichage dynamique des questions et du score
   - **Property Binding** : Liaison des propriétés des composants
   - **Event Binding** : Gestion des clics sur les boutons de réponse
   - **Two-Way Data Binding** : Champ de saisie directe avec `[(ngModel)]`

## 🏗️ Architecture de l'Application

### Composants Principaux

```
src/app/
├── models/
│   └── question.model.ts          # Interface TypeScript pour les questions
├── home-component/                # Page d'accueil
│   ├── home-component.ts
│   ├── home-component.html
│   └── home-component.css
├── game-component/                # Composant principal du jeu
│   ├── game-component.ts
│   ├── game-component.html
│   └── game-component.css
├── question-component/            # Composant réutilisable pour une question
│   ├── question-component.ts
│   ├── question-component.html
│   └── question-component.css
└── score-component/               # Affichage des résultats
    ├── score-component.ts
    ├── score-component.html
    └── score-component.css
```

### Routes

- `/` - Page d'accueil (HomeComponent)
- `/game` - Jeu de quiz (GameComponent)
- `/score` - Résultats finaux (ScoreComponent)

## 🎮 Utilisation

### Démarrer l'application

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve

# Ouvrir dans le navigateur
http://localhost:4200
```

### Flux de l'Application

1. **Page d'accueil** : Cliquez sur "Commencer le Quiz"
2. **Quiz** : 
   - Lisez la question
   - Sélectionnez une réponse parmi les options
   - Répondez avant la fin du chronomètre (30s)
   - Consultez les statistiques en temps réel
3. **Résultats** :
   - Visualisez votre score final
   - Consultez le pourcentage de réussite
   - Recommencez ou retournez à l'accueil

## 🎨 Fonctionnalités Visuelles

- **Design moderne** avec dégradés de couleurs
- **Animations fluides** pour les interactions
- **Feedback visuel** :
  - ✅ Vert pour les bonnes réponses
  - ❌ Rouge pour les mauvaises réponses
  - ⚠️ Jaune quand il reste 10 secondes
  - 🔴 Rouge clignotant à 5 secondes

## 📊 Système de Points

| Action | Points |
|--------|--------|
| Réponse correcte | +10 |
| Réponse incorrecte | -5 |
| Temps écoulé | -5 |

## 🛠️ Technologies Utilisées

- **Angular 20.3.0** - Framework principal
- **TypeScript** - Langage de programmation
- **RxJS** - Gestion de la réactivité
- **CSS3** - Styles et animations
- **Angular Router** - Navigation entre les pages
- **FormsModule** - Two-way data binding

## 📝 Structure des Questions

```typescript
interface Question {
  question: string;      // Texte de la question
  options: string[];     // Options de réponse
  reponse: string;       // Réponse correcte
}
```

## 🎯 Concepts Angular Utilisés

### Data Binding
- **Interpolation** : `{{ variable }}`
- **Property Binding** : `[property]="value"`
- **Event Binding** : `(event)="handler()"`
- **Two-Way Binding** : `[(ngModel)]="variable"`

### Directives
- `*ngFor` - Itération sur les tableaux
- `*ngIf` - Affichage conditionnel
- `[class]` - Classes dynamiques
- `[style]` - Styles dynamiques

### Lifecycle Hooks
- `ngOnInit()` - Initialisation du composant
- `ngOnDestroy()` - Nettoyage (timer)

## 🚀 Améliorations Futures

- [ ] Catégories de questions
- [ ] Niveaux de difficulté
- [ ] Système de badges
- [ ] Classement des meilleurs scores
- [ ] Mode multijoueur
- [ ] Questions avec images/audio
- [ ] Sauvegarde locale des scores

## 👨‍💻 Auteur

Développé dans le cadre d'un projet éducatif Angular

## 📄 Licence

Ce projet est à usage éducatif.
