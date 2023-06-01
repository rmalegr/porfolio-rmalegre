import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPerson } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'My App';
  faPerson = faPerson

  constructor() { }

  ngOnInit(): void {

  }


}
