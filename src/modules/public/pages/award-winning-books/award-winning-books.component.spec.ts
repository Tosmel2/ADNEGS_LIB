import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardWinningBooksComponent } from './award-winning-books.component';

describe('AwardWinningBooksComponent', () => {
  let component: AwardWinningBooksComponent;
  let fixture: ComponentFixture<AwardWinningBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwardWinningBooksComponent]
    });
    fixture = TestBed.createComponent(AwardWinningBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
