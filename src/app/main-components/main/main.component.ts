import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app.service';
import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getCustomPaginatorConfiguration } from '../../sub-components/table/CustomPaginatorConfiguration'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useValue: getCustomPaginatorConfiguration() }
  ]
})

export class MainComponent implements OnInit {
  counterData: any[];
  data: any[];
  pricingData: any[] = [];

  isRtl: boolean = this.appService.isRtl;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.appService.isRtlChange.subscribe(value => { this.isRtl = value; });

    this.counterData = [{ amount: "100", header: "Counter", details: "Some text some text some text", icon: "./assets/images/example-icon.svg" },
    { amount: "55", header: "Counter", details: "Some text some text some text", icon: "./assets/images/example-icon.svg" },
    { amount: "60", header: "Counter", details: "Some text some text some text", icon: "./assets/images/example-icon.svg" }]

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

  scroll(el) {
    // el.scrollIntoView({behavior: "smooth"});
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}