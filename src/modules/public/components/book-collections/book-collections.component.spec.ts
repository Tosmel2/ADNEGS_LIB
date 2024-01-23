import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionsComponent } from './book-collections.component';

describe('BookCollectionsComponent', () => {
  let component: BookCollectionsComponent;
  let fixture: ComponentFixture<BookCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCollectionsComponent]
    });
    fixture = TestBed.createComponent(BookCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
