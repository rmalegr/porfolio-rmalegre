import { Component, OnInit } from '@angular/core';
import { faCoffee, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee
  faSearch = faSearch
  constructor() {


  }
  ngOnInit(): void {
  }

}
