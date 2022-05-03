import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producto } from './producto.component';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getProductosenSede(idSede: number): Observable<Producto[]>
{
  var sede  = idSede.toString();
  var url = this.apiUrl+'sedes/'+sede+'/productos';
  console.log(url);
  return this.http.get<Producto[]> (url);// localhost:8080/api/sedes/idsede/productos
}



}
