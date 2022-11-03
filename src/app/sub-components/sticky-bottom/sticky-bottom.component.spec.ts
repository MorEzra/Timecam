import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyBottomComponent } from './sticky-bottom.component';

describe('StickyBottomComponent', () => {
  let component: StickyBottomComponent;
  let fixture: ComponentFixture<StickyBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
