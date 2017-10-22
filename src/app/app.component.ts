import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  get hobbies(): FormArray {
    return <FormArray>this.signupForm.get('hobbies');
  }

  get userData(): { [key: string]: FormControl } {
    return {
      'username': <FormControl>this.signupForm.get('userData.username'),
      'email': <FormControl>this.signupForm.get('userData.username'),
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [
          Validators.required, this.forbiddenNames.bind(this)
        ]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
  }

  handleAddHobby() {
    this.hobbies.push(new FormControl(null, Validators.required));
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    const forbiddenUserNames = ['Chris', 'Anna'];

    if (forbiddenUserNames.indexOf(control.value) > -1) {
      return { 'nameIsForbidden': true };
    }

    return null; // if valid return null!!!
  }
}
