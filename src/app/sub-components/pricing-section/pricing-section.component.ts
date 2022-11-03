import { AppService } from 'src/app/services/app.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent implements OnInit {
  @Input() data: any[] = [];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
