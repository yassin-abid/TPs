import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { GameComponent } from './game-component/game-component';
import { ScoreComponent } from './score-component/score-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', redirectTo: '' }
];
