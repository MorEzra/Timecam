import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  data: any[];
  pricingData: any[] = [];
  src: any = "../../../assets/images/customers.svg";

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    
    this.data = [[{ type: "בסיסי", options: [{ info: "תנאי ראשון למסלול", type: 2 }, { info: "תנאי שני למסלול", type: 1 }, { info: "תנאי שלישי למסלול", type: 1 }, { info: "תנאי רביעי למסלול", type: 1 }], monthlyPrice: 35, yearlyPrice: 420 }, { type: "Basic", options: [{ info: "First condition", type: 2 }, { info: "Second condition", type: 1 }, { info: "Third condition", type: 1 }, { info: "Fourth condition", type: 1 }], monthlyPrice: 35, yearlyPrice: 420 }],
    [{ type: "מתקדם", options: [{ info: "תנאי ראשון למסלול", type: 2 }, { info: "תנאי שני למסלול", type: 2 }, { info: "תנאי שלישי למסלול", type: 1 }, { info: "תנאי רביעי למסלול", type: 1 }], monthlyPrice: 45, yearlyPrice: 540 }, { type: "Pro", options: [{ info: "First condition", type: 2 }, { info: "Second condition", type: 2 }, { info: "Third condition", type: 1 }, { info: "Fourth condition", type: 1 }], monthlyPrice: 45, yearlyPrice: 540 }],
    [{ type: "פופולרי", options: [{ info: "תנאי ראשון למסלול", type: 1 }, { info: "תנאי שני למסלול", type: 2 }, { info: "תנאי שלישי למסלול", type: 2 }, { info: "תנאי רביעי למסלול", type: 2 }], monthlyPrice: 55, yearlyPrice: 660 }, { type: "Popular", options: [{ info: "First condition", type: 1 }, { info: "Second condition", type: 2 }, { info: "Third condition", type: 2 }, { info: "Fourth condition", type: 2 }], monthlyPrice: 55, yearlyPrice: 660 }],
    [{ type: "מומחה", options: [{ info: "תנאי ראשון למסלול", type: 2 }, { info: "תנאי שני למסלול", type: 2 }, { info: "תנאי שלישי למסלול", type: 2 }, { info: "תנאי רביעי למסלול", type: 1 }], monthlyPrice: 65, yearlyPrice: 780 }, { type: "Expert", options: [{ info: "First condition", type: 2 }, { info: "Second condition", type: 2 }, { info: "Third condition", type: 2 }, { info: "Fourth condition", type: 1 }], monthlyPrice: 65, yearlyPrice: 780 }]];

    this.setPricingData();
    this.appService.localeChange.subscribe(value => { this.setPricingData() });
  }

  setPricingData() {
    let i = 0;
    if (this.appService.locale == 'en')
      i = 1;

    let j = 0;

    for (let d of this.data) {
      this.pricingData[j] = d[i];
      j++;
    }
  }

}
