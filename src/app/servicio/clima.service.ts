import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = "8bbcb2c132b8d3cc8350bb0dab6c1677";

  constructor(private http: HttpClient) { }

  clima(ciudad:string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`);

  }


}
