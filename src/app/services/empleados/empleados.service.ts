import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private API_SERVER = "http://localhost:8082/empleado/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEmpleados(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveEmpleado(empleado: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, empleado);
  }

}
