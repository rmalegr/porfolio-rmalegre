import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Portfolio Website';
  loading: boolean = true

  constructor() {

  }
  loadSpinner() {
    setTimeout(() => {
      this.loading = false
    }, 3000);
  }

}
