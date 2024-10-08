import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseComponent } from './firebase.component';

describe('FirebaseComponent', () => {
  let component: FirebaseComponent;
  let fixture: ComponentFixture<FirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
