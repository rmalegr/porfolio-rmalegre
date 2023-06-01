import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpporfolioComponent } from './cardpporfolio.component';

describe('CardpporfolioComponent', () => {
  let component: CardpporfolioComponent;
  let fixture: ComponentFixture<CardpporfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpporfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpporfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
