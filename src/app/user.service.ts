import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginData } from "./layouts/register/register.component";


@Injectable({providedIn: 'root'})

export class UserService {
    constructor(private http: HttpClient,private router: Router){}
    register(firstName: string, lastName: string, mobileNo: number, email: string, password: string, confirmPassword: string){ 
        const loginData: LoginData = {firstName : firstName , lastName, mobileNo, email, password, confirmPassword}  
        console.log(loginData);
        this.http.post("http://localhost:8080/api/v1/registration",loginData)
        .subscribe(response =>{  
            console.log(response)  
        });
    }  

    // login(email: string, password: string) {
    //     const loginData : UserData = {email: email, password: password
    //     };
      
    //     this.http.post<JwtResponse>('http://localhost:8080/api/v1/authenticate', loginData)
    //       .subscribe((response: JwtResponse) => {
    //         const token = response.token;
    //         if (token) {
    //           localStorage.setItem('token', token);
    //           //this.router.navigate(['/home']);
    //           console.log(token)
    //         } else {
    //           // Handle login error
    //         }
    //       }, 
    //       (error: HttpErrorResponse) => {
    //         console.error(error);
    //       });
    //     }
}