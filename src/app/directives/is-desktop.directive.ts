import { DeviceDetectorService } from 'ngx-device-detector';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppService } from '../services/app.service';

@Directive({
  selector: '[isDesktop]'
})
export class isDesktopDirective {
  constructor(private deviceService: DeviceDetectorService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    public appService: AppService) { }

  ngOnInit() {
    // let isMobile = false;

    if (this.deviceService.isDesktop()) {
      // this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // this.viewContainer.clear();
      // isMobile = true;
    }
    // setTimeout(() => { this.appService.setIsMobile(isMobile) }, 10);
  }
}