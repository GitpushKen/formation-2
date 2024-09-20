import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantParentComponent } from './composant-parent.component';

describe('ComposantParentComponent', () => {
  let component: ComposantParentComponent;
  let fixture: ComponentFixture<ComposantParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
