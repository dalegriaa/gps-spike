import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor(private http: HttpClient) { }

  getCityNameWithArcgis(latitude:any,longitude:any):Observable<any>{
   const url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${longitude}%2c${latitude}`;
   return  this.http.get<any>(url).pipe();
  }
}
