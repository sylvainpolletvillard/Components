import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-bottom-page',
  templateUrl: './bottom-page.component.html',
  styleUrls: ['./bottom-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BottomPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.app.codeSnippets('');
  }

}

