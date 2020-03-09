import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cat-adopt-form',
  templateUrl: './cat-adopt-form.component.html',
  styleUrls: ['./cat-adopt-form.component.scss']
})
export class CatAdoptFormComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    const formKeys = Object.keys(this.validateForm.controls);
    formKeys.forEach(key => {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    });
    console.log('---> submit: ', this.validateForm);
  }
}
