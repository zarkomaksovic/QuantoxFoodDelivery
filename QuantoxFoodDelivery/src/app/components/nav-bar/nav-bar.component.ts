import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  isAuth = false;
  authSubscription: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
    ) {}


    ngOnInit() {
      this.authSubscription = this.authService.authChange.subscribe(authStatus => {
        this.isAuth = authStatus;
      });
    }
    onLogout() {
      this.authService.logout();
    }

    ngOnDestroy() {
      this.authSubscription.unsubscribe();
    }

}
