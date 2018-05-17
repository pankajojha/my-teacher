
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavComponent } from './teacher-nav.component';

describe('TeacherNavComponent', () => {
  let component: TeacherNavComponent;
  let fixture: ComponentFixture<TeacherNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
