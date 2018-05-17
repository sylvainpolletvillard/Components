import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'c3m-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {

  // Inputs
  @Input() title;
  @Input() name;
  @Input() id = '';

  // Constructor
  constructor(private http: Http) { }

  // Array of all options
  allOptions: any[];


  // On Init
  ngOnInit() {
      // Get Data of a JSON (or other...)
      this.http.get('assets/json/dataSelect.json')
          .map((response: Response) => response.json()) // Specify JSON type
          .subscribe(data => {
              // Set items to response Json
              this.allOptions = data;
          });
  }

}
