import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowedPokeComponent } from './showed-poke.component';

describe('ShowedPokeComponent', () => {
  let component: ShowedPokeComponent;
  let fixture: ComponentFixture<ShowedPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowedPokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowedPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
