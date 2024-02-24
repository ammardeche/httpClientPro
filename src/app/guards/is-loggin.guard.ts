import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn , Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLogginGuard: CanActivateFn = (route, state) => {

  const router : Router = inject(Router)
  const authSer : AuthService = inject(AuthService)

  const isLoggedIn = authSer.isLoggedIn$(); 

  if (isLoggedIn) {
    return true; 
  }
  else{
    router.navigate(['/login']);
    return false; 
  }

};
