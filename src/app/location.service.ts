import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { LocationData } from "./location";

@Injectable({providedIn: 'root'})

export class LocationService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public addLocation(location: LocationData): Observable<LocationData> {
        return this.http.post<LocationData>(`${this.apiServerUrl}/locations`, location);
      }

    public getLocation(): Observable<LocationData[]> {
        return this.http.get<LocationData[]>(`${this.apiServerUrl}/locations/all`);
      }  

}
