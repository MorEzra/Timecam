import { AppService } from 'src/app/services/app.service';
import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { getCustomPaginatorConfiguration } from '../../sub-components/table/CustomPaginatorConfiguration'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useValue: getCustomPaginatorConfiguration() }]
})
export class TableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['date', 'hours', 'description', 'test1', 'test2', 'test3', 'edit'];
  @Input() dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  editIcon = faPencilAlt;
  isRtl: boolean = this.appService.isRtl;

  tableInputDetails: any = { detail: '' };
  tableFormGroup: FormGroup;
  tableFormControl: FormControl;

  constructor(private translate: TranslateService, public appService: AppService) { }

  ngOnInit() {
    this.appService.isRtlChange.subscribe(value => { this.isRtl = value; });
    this.initFormGroup();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  initFormGroup() {
    this.tableFormControl = new FormControl("", []);

    this.tableFormGroup = new FormGroup({
      detail: this.tableFormControl
    })
  }

  updateData(e) {
    e.isEditEnabled = false;
    console.log(e.data);
    
    //TODO: update server
  }

  enableEdit(e){
    this.dataSource.data.map(d => d.isEditEnabled = false);
    
    e.isEditEnabled = true;
  }
}
