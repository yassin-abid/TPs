import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { QuestionComponent } from '../question-component/question-component';

@Component({
  selector: 'app-game-component',
  imports: [CommonModule, FormsModule, QuestionComponent],
  templateUrl: './game-component.html',
  styleUrl: './game-component.css',
})
export class GameComponent implements OnInit, OnDestroy {
  questions: Question[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique'
    },
    {
      question: "Quelle est la capitale de l'Algérie ?",
      options: ['Alger', 'Tunis', 'Tanger'],
      reponse: 'Alger'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu'
    },
    {
      question: 'Combien de continents y a-t-il sur Terre ?',
      options: ['5', '6', '7', '8'],
      reponse: '7'
    },
    {
      question: 'Quelle est la planète la plus proche du Soleil ?',
      options: ['Vénus', 'Mercure', 'Mars', 'Terre'],
      reponse: 'Mercure'
    }
  ];

  currentQuestionIndex = 0;
  score = 0;
  bonnesReponses = 0;
  mauvaisesReponses = 0;
  selectedOption: string | null = null;
  isAnswered = false;
  userInput = '';
  
  // Chronomètre
  timeLeft = 30; // 30 secondes par question
  timerInterval: any;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  get currentQuestion(): Question | null {
    if (this.currentQuestionIndex < this.questions.length) {
      return this.questions[this.currentQuestionIndex];
    }
    return null;
  }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  startTimer(): void {
    this.clearTimer();
    this.timeLeft = 30;
    
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      
      if (this.timeLeft <= 0) {
        this.handleTimeOut();
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  handleTimeOut(): void {
    if (!this.isAnswered) {
      this.mauvaisesReponses++;
      this.score -= 5;
      this.isAnswered = true;
      
      setTimeout(() => {
        this.nextQuestion();
      }, 1500);
    }
  }

  onSelectOption(option: string): void {
    // Bloquer les réponses après la première sélection (Défi 1)
    if (this.isAnswered) {
      return;
    }

    this.selectedOption = option;
    this.isAnswered = true;
    this.clearTimer();

    const currentQuestion = this.currentQuestion;
    if (currentQuestion && option === currentQuestion.reponse) {
      this.score += 10;
      this.bonnesReponses++;
    } else {
      this.score -= 5;
      this.mauvaisesReponses++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestion();
      this.startTimer();
    } else {
      this.finishQuiz();
    }
  }

  resetQuestion(): void {
    this.selectedOption = null;
    this.isAnswered = false;
    this.userInput = '';
  }

  finishQuiz(): void {
    this.clearTimer();
    this.router.navigate(['/score'], {
      state: {
        score: this.score,
        bonnesReponses: this.bonnesReponses,
        mauvaisesReponses: this.mauvaisesReponses,
        totalQuestions: this.questions.length
      }
    });
  }

  getButtonClass(option: string): string {
    if (!this.isAnswered) {
      return 'option-button';
    }

    const currentQuestion = this.currentQuestion;
    if (currentQuestion) {
      if (option === currentQuestion.reponse) {
        return 'option-button correct';
      }
      if (option === this.selectedOption && option !== currentQuestion.reponse) {
        return 'option-button incorrect';
      }
    }
    
    return 'option-button disabled';
  }
}
