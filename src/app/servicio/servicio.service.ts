import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Servicio } from './servicio';
import { ServicioDetail } from './servicio-detail';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl: string = environment.baseUrl + 'servicios'

  constructor(private http: HttpClient) { }

  getServicios(): Observable<ServicioDetail[]>{
    return this.http.get<Servicio[]>(this.apiUrl);
  }

  getServicio(id: string): Observable<ServicioDetail>{
    return this.http.get<ServicioDetail>(this.apiUrl + '/' + id);
  }

  getServicioenSede(idSede: string): Observable<Servicio[]>
  {
  var url = environment.baseUrl+'sedes/'+idSede+'/servicios';
  console.log(url);
  return this.http.get<Servicio[]> (url);// localhost:8080/api/sedes/idsede/productos
  }


}
