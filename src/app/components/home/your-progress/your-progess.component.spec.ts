import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProgessComponent } from './your-progess.component';

describe('YourProgessComponent', () => {
  let component: YourProgessComponent;
  let fixture: ComponentFixture<YourProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourProgessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
