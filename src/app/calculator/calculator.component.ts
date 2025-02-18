import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  title: string = 'Calculator';

  constructor(private titleService: Title) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  input: string = '';

  appendOperator(operator: string) {
    this.input += operator;
  }

  appendNumber(number: string) {
    this.input += number;
  }

  calculateResult() {
    try {
      this.input = evaluate(this.input).toString();
    } catch (e) {
      this.input = 'Error';
    }
  }

  appendComma(comma: string) {
    this.input += comma;
  }

  clear() {
    this.input = '';
  }

  deleteLast() {
    this.input = this.input.slice(0, -1); // Tar bort sista tecknet
  }
}
