import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheComponentComponent } from './tache-component.component';

describe('TacheComponentComponent', () => {
  let component: TacheComponentComponent;
  let fixture: ComponentFixture<TacheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacheComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
