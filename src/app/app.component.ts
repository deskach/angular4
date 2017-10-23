import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  get model(): { [key: string]: FormControl } {
    return {
      'projectname': <FormControl>this.projectForm.get('projectname'),
      'email': <FormControl>this.projectForm.get('email'),
    };
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [
        Validators.required,
        this.forbiddenProjects.bind(this)
      ], [
        this.forbiddenProjectsAsync.bind(this)
      ]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable'),
    });
  }

  forbiddenProjects(control: FormControl): { [key: string]: boolean } {
    if (control.value === 'Test') {
      return { 'nameIsForbidden': true };
    }

    return null; // if valid return null!!!
  }

  forbiddenProjectsAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        // if (this._isProjectForbidden(control.value)) {
        if (control.value === 'AsyncTest') {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
