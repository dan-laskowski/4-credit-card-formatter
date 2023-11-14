import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardformatPipe } from '../../cardformat.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formatter',
  standalone: true,
  imports: [CommonModule, CardformatPipe, FormsModule],
  templateUrl: './formatter.component.html',
  styleUrl: './formatter.component.css',
})
export class FormatterComponent {
  cardNumber: string = '';
}
