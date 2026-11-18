import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { UserService } from '../services/user-service';

export const adminGuard: CanActivateFn  = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);


  if( !userService.isAdmin() ){
    return router.createUrlTree(['']);
  }

  return true;
};
// ng g g guard/admin