import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { LoginService } from "../login/login.service";
@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService:LoginService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
        return this.authService.isAuthenticated();
    }
}