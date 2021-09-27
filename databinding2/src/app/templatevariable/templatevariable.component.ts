import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariable',
  templateUrl: './templatevariable.component.html',
  styleUrls: ['./templatevariable.component.css']
})
export class TemplatevariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeText(tag:any,val:String){
    console.log(tag)
    tag.innerText = val;
  }

}
