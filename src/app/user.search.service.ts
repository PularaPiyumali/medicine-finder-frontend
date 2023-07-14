import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { UserSearchData } from "./user.search";

@Injectable({providedIn: 'root'})

export class UserSearchService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public search(userSearchData: UserSearchData): Observable<UserSearchData> {
      return this.http.post<UserSearchData>(`${this.apiServerUrl}/search`, userSearchData);
    }

    public getSearchData(): Observable<UserSearchData[]> {
        return this.http.get<UserSearchData[]>(`${this.apiServerUrl}/search-frequencies`);
      }

}