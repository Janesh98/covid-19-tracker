import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  message: string;
  country: string;

  constructor(private shared: SharedService) { }

  ngOnInit() {
    this.shared.currentMessage.subscribe(message => this.message = message);
  }

  changeCountry(input) {
    const country = input.value.country;
    this.country = country;
    this.shared.changeMessage(country);
  }

}
