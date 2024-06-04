import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrl: './rf.component.scss',
})
export class RfComponent {
  generi: string[] = ['uomo', 'donna', 'altro'];
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
}
