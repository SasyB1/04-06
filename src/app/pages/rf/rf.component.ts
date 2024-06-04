import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrl: './rf.component.scss',
})
export class RfComponent implements OnInit {
  generi: string[] = ['uomo', 'donna', 'altro'];
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      cognome: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),

      password: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      passwordConfirm: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      genere: this.fb.control(null),
      profileImage: this.fb.control(null),
      biografia: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      nickname: this.fb.control(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }

  submit() {
    console.log(this.form.value);
  }

  autoFillForm() {
    const datiDaFillare = {
      nome: 'Gianmarco',
      cognome: 'Tocco',
      password: '123456',
      passwordConfirm: '123456',
      username: 'TmBlurr',
    };
    this.form.patchValue(datiDaFillare);
  }
}
