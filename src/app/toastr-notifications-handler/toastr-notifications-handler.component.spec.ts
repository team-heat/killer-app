/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToastrNotificationsHandlerDirective } from './toastr-notifications-handler.component';

describe('ToastrNotificationsHandlerComponent', () => {
  let component: ToastrNotificationsHandlerDirective;
  let fixture: ComponentFixture<ToastrNotificationsHandlerDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrNotificationsHandlerDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrNotificationsHandlerDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
