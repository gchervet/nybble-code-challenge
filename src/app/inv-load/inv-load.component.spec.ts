import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvLoadComponent } from './inv-load.component';

describe('InvLoadComponent', () => {
  let component: InvLoadComponent;
  let fixture: ComponentFixture<InvLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
