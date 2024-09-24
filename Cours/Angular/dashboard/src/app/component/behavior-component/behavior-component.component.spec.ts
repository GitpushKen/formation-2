import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorComponentComponent } from './behavior-component.component';

describe('BehaviorComponentComponent', () => {
  let component: BehaviorComponentComponent;
  let fixture: ComponentFixture<BehaviorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
