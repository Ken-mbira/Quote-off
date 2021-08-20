import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQuoteComponent } from './remove-quote.component';

describe('RemoveQuoteComponent', () => {
  let component: RemoveQuoteComponent;
  let fixture: ComponentFixture<RemoveQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
