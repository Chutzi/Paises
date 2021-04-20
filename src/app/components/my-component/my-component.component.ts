import { Component, OnInit } from '@angular/core';
import myModels from 'src/app/Models/myModels';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }
  info!: myModels.info;
  loading!: boolean;
  myResponse!: myModels.Countrys[];
  caja!: string;
  filterPais: string = ''; 

  ngOnInit(): void {
    this.info = <myModels.info>{}
    this.info.apiUrl = "https://restcountries.eu/rest/v2/all";
    this.buttonApi();
  }

  buttonApi() {
    fetch(this.info.apiUrl)

      .then(response => response.json())
      .then((data: myModels.Countrys[]) => {

        this.myResponse = data;

        console.log(this.myResponse);

      })
      
  }

}
