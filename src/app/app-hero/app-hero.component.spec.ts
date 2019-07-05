import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroComponent } from './app-hero.component';

describe('AppHeroComponent', () => {
  let component: AppHeroComponent;
  let fixture: ComponentFixture<AppHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
