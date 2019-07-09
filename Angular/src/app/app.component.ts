import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, Subscription } from 'rxjs';

class Stone {
  class: string;
  left: string;
  top: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Connect 6';
  source = timer(2000,1000);
  stoneList: Array<Stone> = [];

  constructor(private http:HttpClient) {
    this.c1.result = "test";
  }

  c1 : Result = new Result();
  products: any = [];
  private sub : Subscription;

  click1(){
    this.sub.unsubscribe();
  }
  click2(){
    this.resetData().subscribe();
    this.sub = this.source.subscribe((t) => this.onTimeOut());
  }

  onTimeOut(){
    this.getAllData().subscribe(data=> {
      console.log(data);
      this.products = data;
    });

    let stoneObj = new Stone();

    for(let entry of this.products){
      let color = entry.client;
      let coor_X = entry.x;
      let coor_Y = entry.y;
      let left;
      switch(coor_X){
        case 'A': left = 4+ 0*40 ; break ;
        case 'B': left = 4+ 1*40 ; break ;
        case 'C': left = 4+ 2*40 ; break ;
        case 'D': left = 4+ 3*40 ; break ;
        case 'E': left = 4+ 4*40 ; break ;
        case 'F': left = 4+ 5*40 ; break ;
        case 'G': left = 4+ 6*40 ; break ;
        case 'H': left = 4+ 7*40 ; break ;
        case 'I': left = 4+ 8*40 ; break ;
        case 'J': left = 4+ 9*40 ; break ;
        case 'K': left = 4+ 10*40 ; break ;
        case 'L': left = 4+ 11*40 ; break ;
        case 'M': left = 4+ 12*40 ; break ;
        case 'N': left = 4+ 13*40 ; break ;
        case 'O': left = 4+ 14*40 ; break ;
        case 'P': left = 4+ 15*40 ; break ;
        case 'Q': left = 4+ 16*40 ; break ;
        case 'R': left = 4+ 17*40 ; break ;
        case 'S': left = 4+ 18*40 ; break ;
      }
      let top = 4 + (19-coor_Y)*40;
      stoneObj.class = color + 'Stone';
      stoneObj.left = left + 'px';
      stoneObj.top = top + 'px';

      let secondTick = timer(1000,1000);
      secondTick.subscribe((tick)=>{ this.stoneList.push(stoneObj); });

      this.resultData().subscribe(m => this.c1.result = m.toString());
    }
  }

  resetData()
  {
    return this.http.get("./resetdata/")
  }

  resultData()
  {
    return this.http.get("./resultdata/")
  }

  getAllData()
  {
    return this.http.get("./home/omok/")
  }

}

export class Result
{
  result : String;
}

