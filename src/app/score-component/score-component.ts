import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-component',
  imports: [CommonModule],
  templateUrl: './score-component.html',
  styleUrl: './score-component.css',
})
export class ScoreComponent implements OnInit {
  score = 0;
  bonnesReponses = 0;
  mauvaisesReponses = 0;
  totalQuestions = 0;
  pourcentage = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.score = navigation.extras.state['score'];
      this.bonnesReponses = navigation.extras.state['bonnesReponses'];
      this.mauvaisesReponses = navigation.extras.state['mauvaisesReponses'];
      this.totalQuestions = navigation.extras.state['totalQuestions'];
    }
  }

  ngOnInit(): void {
    if (this.totalQuestions > 0) {
      this.pourcentage = (this.bonnesReponses / this.totalQuestions) * 100;
    }
  }

  get performance(): string {
    if (this.pourcentage >= 80) return 'Excellent';
    if (this.pourcentage >= 60) return 'Bien';
    if (this.pourcentage >= 40) return 'Moyen';
    return 'Peut mieux faire';
  }

  get performanceClass(): string {
    if (this.pourcentage >= 80) return 'excellent';
    if (this.pourcentage >= 60) return 'good';
    if (this.pourcentage >= 40) return 'average';
    return 'poor';
  }

  restartQuiz(): void {
    this.router.navigate(['/game']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
