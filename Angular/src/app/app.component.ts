import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'djint';
  source = timer(2000,1000);
  constructor(private http:HttpClient) {
    this.c1.name = "eli"
  }

  products: any = [];
  
  c1:Cust = new Cust();
  click1(){
    this.getBooks().subscribe(b => this.c1.name = b.toString())
  }
  click2(){ 
    this.source.subscribe((t) => this.onTimeOut());
  }

  onTimeOut(){
    this.getAllBooks().subscribe(data=> {
	console.log(data);
	this.products = data;
	});
	var canvas : any = document.getElementById('board');
	if(canvas.getContext){
	   for(let entry of this.products){
	   var coor_X = entry.x;
	   var coor_Y = entry.y;
	   var ctx = canvas.getContext('2d');
	   
	   var y;
	   switch(coor_X){	    
	    case 'A': y = 0*30 ; break ; 
            case 'B': y = 1*30 ; break ;
            case 'C': y = 2*30 ; break ;
            case 'D': y = 3*30 ; break ;
            case 'E': y = 4*30 ; break ;
            case 'F': y = 5*30 ; break ;
            case 'G': y = 6*30 ; break ;
            case 'H': y = 7*30 ; break ;
            case 'I': y = 8*30 ; break ;
            case 'J': y = 9*30 ; break ;
            case 'K': y = 10*30 ; break ;
            case 'L': y = 11*30 ; break ;
            case 'M': y = 12*30 ; break ;
            case 'N': y = 13*30 ; break ;
            case 'O': y = 14*30 ; break ;
            case 'P': y = 15*30 ; break ;
            case 'Q': y = 16*30 ; break ;
            case 'R': y = 17*30 ; break ;
            case 'S': y = 18*30 ; break ;
	}
	   var x = (coor_Y - 1) * 30;

           ctx.beginPath();
	   ctx.arc(x, y, 14, 0, 2 * Math.PI, false);    
	   ctx.fillStyle = "white";
	   ctx.fill();
	   ctx.lineWidth = 1;
  	   ctx.strokeSytle = "black";
	   ctx.stroke();
	}
	}

  }
  
  getAllBooks()
  {
    return this.http
      .get("http://turnincode.cafe24.com:8880/home/omok/")
  }
  getBooks()
  {
    return this.http
      .post("./apitest/","3")
  }
}

export class Cust{
  name:string;
  age:number;
  city:string;
}
