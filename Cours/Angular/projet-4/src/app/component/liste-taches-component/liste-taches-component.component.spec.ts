import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTachesComponentComponent } from './liste-taches-component.component';

describe('ListeTachesComponentComponent', () => {
  let component: ListeTachesComponentComponent;
  let fixture: ComponentFixture<ListeTachesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeTachesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTachesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
