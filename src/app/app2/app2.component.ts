import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css'],
})
export class App2Component implements OnInit, DoCheck {
  //  myForm: DataModel = null;

  myForm: DataModel = {
    name: '',
    email: '',
    phone: null,
    address: '',
  };

  @Input() keyword: any;

  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Checking...');
    if (this.keyword) {
      console.log(this.keyword.name);

      this.myForm.name = this.keyword.name;
      this.myForm.email = this.keyword.email;
      this.myForm.phone = this.keyword.phone;
      this.myForm.address = this.keyword.address;
    }
  }
}
