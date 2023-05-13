import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkformComponent } from './markform.component';

describe('MarkformComponent', () => {
  let component: MarkformComponent;
  let fixture: ComponentFixture<MarkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
