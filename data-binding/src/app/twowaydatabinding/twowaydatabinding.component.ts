import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {
  name:string = 'bretlee'
  image:string = ''
  country:string = ''
  constructor() {}
   changeElements(){
    if (this.name == 'sachin'){
      this.image = 'https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg'
      this.country = 'India'
    }
    else if (this.name == 'bretlee'){
      this.image = 'https://m.economictimes.com/thumb/msid-82277407,width-1200,height-900,resizemode-4,imgsize-186568/brett-lee.jpg'
      this.country = 'Australia'
    }
    else{
      this.image = ''
      this.country=''
    }
   }

  ngOnInit(): void {
  }

}
