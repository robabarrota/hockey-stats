import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentVersion = environment.appVersion;

  constructor() { }

  ngOnInit() {
  }

}
