import { AppService } from 'src/app/services/app.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[isMobile]'
})
export class isMobileDirective {
  constructor(private deviceService: DeviceDetectorService,
    // private templateRef: TemplateRef<any>,
    // private viewContainer: ViewContainerRef,
    public appService: AppService) { }

  isMobile: boolean;

  ngOnInit() {
    // let isMobile = false;

    if (this.deviceService.isMobile()) {
      // this.viewContainer.createEmbeddedView(this.templateRef);
      // isMobile = true;
    } else {
      // this.viewContainer.clear();
    }

    // setTimeout(() => { this.appService.isMobileChange.next(isMobile) }, 10);
  }
}