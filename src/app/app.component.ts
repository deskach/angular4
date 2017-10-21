import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') _form: NgForm;
  defaultQuestion = 'pet';
  answer = 'Test';
  genders = ['male', 'female'];

  suggestUserName() {
    const username = 'Superuser';
    // const email = 'test@google.com';
    // const secret = 'pet';
    // const questionAnswer = 'pet';
    // const gender = 'male';
    // const userData = {username, email};
    //
    // this._form.setValue({userData, secret, questionAnswer, gender});
    this._form.form.patchValue({ userData: { username } });
  }

  onSubmit() {
    console.log(this._form);
    console.log(this._form.value);
    // this._form.reset(); // supports same format as form.patchValue
  }
}
