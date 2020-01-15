import {Component, OnInit} from '@angular/core';

declare var M: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const options = {};

    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, options);
  }

}
