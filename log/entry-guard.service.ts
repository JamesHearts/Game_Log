import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Router } from '@angular/router';
@Injectable()

export  class EntryDetailGuard implements CanActivate {
    
    constructor(private _router: Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[2].path;
        if(isNaN(id) || id < 1) {
            alert('Invalid entry Id')
            this._router.navigate(['/log']);
            return false;
        };
        return true;
    }
}