import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginData } from "./layouts/register/register.component";
import { JwtResponse, UserData } from "./layouts/login/login.component";
import { map } from "rxjs";
import { environment } from "environments/environment";


@Injectable({providedIn: 'root'})

export class UserService {

    private apiServerUrl = environment.apiBaseUrl;
    
    constructor(private http: HttpClient,private router: Router){}
    
    register(firstName: string, lastName: string, mobileNo: number, email: string, password: string, confirmPassword: string){ 
        const loginData: LoginData = {firstName : firstName , lastName, mobileNo, email, password, confirmPassword}  
        //console.log(loginData);
        this.http.post<JwtResponse>("http://localhost:8080/api/v1/registration",loginData)
        .subscribe((response: JwtResponse) =>{  
            const token = response.token;
            const role = response.role;
            console.log(token);
            console.log(role);
            if (role === 'CUSTOMER') {
              this.router.navigate(['/verify-email']);
            } else if (role === 'ADMIN') {
              this.router.navigate(['admin/pharmacy-registration']);
            } else {
              console.log("Not Found");
            }
        });
    }  


    // login(email: string, password: string) {
    //     const loginData : UserData = {email: email, password: password
    //     };
      
    //     this.http.post<JwtResponse>('http://localhost:8080/api/v1/authenticate', loginData)
    //       .subscribe((response: JwtResponse) => {
    //         const token = response.token;
    //         const role = response.role;
    //         if (token) {
    //           localStorage.setItem('token', token);
    //           localStorage.setItem('role', role);
              
    //           sessionStorage.setItem('username',email);
    //           console.log(email);
    //           let tokenStr= 'Bearer ' + token;
    //           sessionStorage.setItem('token', tokenStr);
    //           console.log(tokenStr)
              
    //           if (role === 'CUSTOMER') {
    //             this.router.navigate(['./customer/dashboard']);
    //           } else if (role === 'ADMIN') {
    //             this.router.navigate(['./admin/dashboard']);
    //           }
    //           else {console.log ("Not Found")}

    //           //console.log(token)
    //           //console.log(response.role)
    //         } else {
    //           // Handle login error
    //         }
    //       }, 
    //       (error: HttpErrorResponse) => {
    //         console.error(error);
    //       });
    //     }

    login(email: string, password: string) {
      const loginData: UserData = { email: email, password: password };
    
      this.http.post<JwtResponse>('http://localhost:8080/api/v1/authenticate', loginData)
        .pipe(
          map((response: JwtResponse) => {
            const token = response.token;
            const role = response.role;
    
            if (token) {
              localStorage.setItem('token', token);
              localStorage.setItem('role', role);
              
              sessionStorage.setItem('username', email);
              console.log(email);
              let tokenStr = 'Bearer ' + token;
              sessionStorage.setItem('token', tokenStr);
              console.log(tokenStr);
              
              if (role === 'CUSTOMER') {
                this.router.navigate(['./customer/dashboard']);
              } else if (role === 'ADMIN') {
                this.router.navigate(['./admin/dashboard']);
              } else {
                console.log("Not Found");
              }
            } else {
              
            }
    
            return response;
          })
        )
        .subscribe(
          (response: JwtResponse) => {
            
          },
          (error: HttpErrorResponse) => {
            console.error(error);
          }
        );
    }

        isUserLoggedIn() {
          let user = sessionStorage.getItem('username')
          //console.log(!(user === null))
          return !(user === null)
        }
      
        logOut() {
          sessionStorage.removeItem('username')
        }
      
}