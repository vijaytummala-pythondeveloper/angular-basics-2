import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding-example',
  templateUrl: './eventbinding-example.component.html',
  styleUrls: ['./eventbinding-example.component.css']
})
export class EventbindingExampleComponent implements OnInit {
  message : String = ""
  constructor() { }
  

  ngOnInit(): void {
  }

  callme(x:any){
    console.log(x)
    this.message = x.target.value
    x.target.disabled = true
    
  }
  callus(a:any,b:number){
    console.log(a)
    console.log(b)
    a.target.innerHTML = b
  }

}
