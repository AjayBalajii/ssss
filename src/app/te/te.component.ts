import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-te',
  templateUrl: './te.component.html',
  styleUrls: ['./te.component.css']
})
export class TeComponent implements OnInit {

  constructor() { }
tname:string;
tage:Number;
tq:String;
tadd:string;
  ngOnInit(): void {
  }

}
