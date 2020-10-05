import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  image:String="assets/bc1.jpg";


constructor(private router:Router){
 

}
//onclickteacher(): void{
  //this.router.navigateByUrl('te');
//}
//nclickstudent(): void{
//  this.router.navigateByUrl('st');
//}



}
