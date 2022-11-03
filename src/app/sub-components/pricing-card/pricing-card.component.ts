import { AppService } from 'src/app/services/app.service';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {
  @Input() data: any;

  panelOpenState: boolean = false;

  xIcon = faTimes;
  vIcon = faCheck;
  popularIcon = faStar;
  upArrowIcon = faChevronUp;
  downArrowIcon = faChevronDown;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

  hasExceptions() {
    return this.data.options.filter(opt => opt.type == 1).length == 0;
  }
}
