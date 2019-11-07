import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-myclock',
  templateUrl: './myclock.component.html',
  styleUrls: ['./myclock.component.css']
})
export class MyclockComponent {

 time:string
 @Input() myciry:string;
  @Input() myColor:string;
  constructor() {
    this.setTime(); 
    setInterval(()=>this.setTime(),1000)
    }
  setTime(){
    let a = new Date(); 
    this.time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()
  } 

}