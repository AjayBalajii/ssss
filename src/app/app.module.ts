import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule, routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
//import { TeComponent } from './te/te.component';
//import { StComponent } from './st/st.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
