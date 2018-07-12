import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      fname: [''],
      lname: [''],
      address: [''],
      city: [''],
      state: [''],
      zipcode:[''],
    }); 
  }

  get fname() {
    return this.userForm.get('fname');
  }
  registerInformation(data) {
    console.log(data);
  }

}
