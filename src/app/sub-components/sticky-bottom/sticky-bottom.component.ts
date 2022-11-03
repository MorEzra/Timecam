import { Component, OnInit } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sticky-bottom',
  templateUrl: './sticky-bottom.component.html',
  styleUrls: ['./sticky-bottom.component.scss']
})
export class StickyBottomComponent implements OnInit {
  phoneIcon = faPhoneAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
