import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css'],
})
export class App1Component implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Output() private outer = new EventEmitter<any>();

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: null,
    address: '',
  });

  // keyword: string = 'HI';

  ngOnInit() {}

  onSave1(keyword: string) {
    console.log(keyword);
    console.log('saving...');
    this.outer.emit(keyword);
  } // submit the form to app2

  onSave() {
    console.log('saving...');
    console.log(this.checkoutForm.value);
    this.outer.emit(this.checkoutForm.value);
  } // submit the form to app2
}
