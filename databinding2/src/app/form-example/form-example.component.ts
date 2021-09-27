import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  formwork = "register"
  constructor() { }

  ngOnInit(): void {
  }

}
