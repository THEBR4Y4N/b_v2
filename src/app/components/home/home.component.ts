import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi:DataApiService) { }
  public proyectos = [];
  public proyecto = '';
  ngOnInit() {
    this.dataApi.getAllProyecto().subscribe(proyectos=>{
      console.log('Proyectos:',proyectos);
      this.proyectos=proyectos;
    })
  }

}
