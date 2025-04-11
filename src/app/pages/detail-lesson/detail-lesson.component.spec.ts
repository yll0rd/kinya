import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLessonComponent } from './detail-lesson.component';

describe('DetailLessonComponent', () => {
  let component: DetailLessonComponent;
  let fixture: ComponentFixture<DetailLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
