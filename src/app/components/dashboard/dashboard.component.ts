import { Component } from '@angular/core';
import { ClimaService } from '../../servicio/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  ciudad = "";
  temperatura = 0;
 
  constructor(private climaService: ClimaService){}

  mClima(){
    this.climaService.clima(this.ciudad).subscribe(data =>{
      this.temperatura = +data.main.temp;
    });
  }
  

}
