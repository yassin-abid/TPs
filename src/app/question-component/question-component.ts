import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question-component',
  imports: [CommonModule],
  templateUrl: './question-component.html',
  styleUrl: './question-component.css',
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() isAnswered: boolean = false;
  @Input() selectedOption: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();

  onSelectOption(option: string): void {
    if (!this.isAnswered) {
      this.optionSelected.emit(option);
    }
  }

  getButtonClass(option: string): string {
    if (!this.isAnswered) {
      return 'option-button';
    }

    if (option === this.question.reponse) {
      return 'option-button correct';
    }
    if (option === this.selectedOption && option !== this.question.reponse) {
      return 'option-button incorrect';
    }
    
    return 'option-button disabled';
  }
}
