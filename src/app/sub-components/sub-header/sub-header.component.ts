import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  isRtl: boolean = this.appService.isRtl;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.isRtlChange.subscribe(value => { this.isRtl = value });
  }

}
