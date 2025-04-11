import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedLessonsComponent } from './recommended-lessons.component';

describe('RecommendedLessonsComponent', () => {
  let component: RecommendedLessonsComponent;
  let fixture: ComponentFixture<RecommendedLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedLessonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
