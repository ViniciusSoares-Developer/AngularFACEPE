import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-menu><router-outlet></router-outlet></app-menu>'
})
export class AppComponent {
  title = 'primeiroDashboard';
}
