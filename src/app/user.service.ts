import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginData } from "./layouts/register/register.component";
import { JwtResponse, UserData } from "./layouts/login/login.component";


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


    login(email: string, password: string) {
        const loginData : UserData = {email: email, password: password
        };
      
        this.http.post<JwtResponse>('http://localhost:8080/api/v1/authenticate', loginData)
          .subscribe((response: JwtResponse) => {
            const token = response.token;
            const role = response.role;
            if (token) {
              localStorage.setItem('token', token);
              localStorage.setItem('role', role);
              //this.router.navigate(['/home']);

              if (role === 'CUSTOMER') {
                this.router.navigate(['./customer/dashboard']);
              } else if (role === 'ADMIN') {
                this.router.navigate(['./admin/dashboard']);
              }
              else {console.log ("Not Found")}

              console.log(token)
              console.log(response.role)
            } else {
              // Handle login error
            }
          }, 
          (error: HttpErrorResponse) => {
            console.error(error);
          });
        }
}