import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  country: string;

  constructor() { }

  ngOnInit() {
  }

  register(form) {
    const country = form.value.country;
    console.log(country);
    this.country = country;
  }

}
