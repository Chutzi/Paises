import { Component } from '@angular/core';
import myModels from './Models/myModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  info!: myModels.info;
  loading!: boolean;
  myResponse!: myModels.Countrys[];
  mypais!: myModels.Countrys[];
  v!: boolean;

  ngOnInit() {
    this.info = <myModels.info>{}
    this.info.title = "Countries of the world using ";
    this.info.apiWeb = "https://restcountries.eu/#api-endpoints-all"
    this.info.instruction="Find information from all the countries of the world";
  }

  

}
