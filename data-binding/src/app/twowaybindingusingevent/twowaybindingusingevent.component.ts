import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybindingusingevent',
  templateUrl: './twowaybindingusingevent.component.html',
  styleUrls: ['./twowaybindingusingevent.component.css']
})
export class TwowaybindingusingeventComponent implements OnInit {
  res:number = 0
  num1:number = 0
  num2:number = 0

  constructor() { }
  add(n1:String,n2:String){
    
    this.res = Number(n1) + Number(n2)
  }
  ngOnInit(): void {
  }

}
