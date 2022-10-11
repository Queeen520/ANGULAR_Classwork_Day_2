import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  info = new FormGroup({
    firstName: new FormControl('',), //Validators.required
    lastName: new FormControl(''),
    telNumber: new FormControl(''),
    email:new FormControl(''),
  });

  onSubmit(){
    
  }

  ngOnInit(): void {
  }

}
