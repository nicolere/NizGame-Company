import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtbPlayerComponent } from './ytb-player.component';

describe('YtbPlayerComponent', () => {
  let component: YtbPlayerComponent;
  let fixture: ComponentFixture<YtbPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtbPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtbPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
