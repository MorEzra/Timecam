import { AppService } from 'src/app/services/app.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  @Input() src: any;

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
