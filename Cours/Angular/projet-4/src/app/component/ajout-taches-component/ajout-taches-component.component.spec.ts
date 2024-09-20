import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTachesComponentComponent } from './ajout-taches-component.component';

describe('AjoutTachesComponentComponent', () => {
  let component: AjoutTachesComponentComponent;
  let fixture: ComponentFixture<AjoutTachesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutTachesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTachesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
