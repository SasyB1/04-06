import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss',
})
export class TdfComponent {
  generi: string[] = ['uomo', 'donna', 'altro'];

  @ViewChild('f', { static: true }) form!: NgForm;

  isInvalidT(field: NgModel) {
    return field.invalid && field.touched;
  }

  autoFillForm() {
    const datiDaFillare = {
      nome: 'Gianmarco',
      cognome: 'Tocco',
      password: '123456',
      passwordConfirm: '123456',
      username: 'TmBlurr',
    };
    this.form.form.patchValue(datiDaFillare);
  }
}
