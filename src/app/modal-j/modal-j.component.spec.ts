import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJComponent } from './modal-j.component';

describe('ModalJComponent', () => {
  let component: ModalJComponent;
  let fixture: ComponentFixture<ModalJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
