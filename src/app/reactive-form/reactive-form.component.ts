import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  rfContact: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get tels(): FormArray {
    return this.rfContact.get('tels') as FormArray;
  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      email: '',
      social: this.fb.group({
        facebook: ['', [Validators.required, Validators.minLength(3)]],
        twitter: '',
        website: ''
      }),
      tels: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  addTel() {
    this.tels.push(this.fb.control(''));
  }

  removeTel(index: number) {
    this.tels.removeAt(index);
  }

  onSubmit() {
    // Do something awesome
    console.log(this.rfContact);
  }
}
