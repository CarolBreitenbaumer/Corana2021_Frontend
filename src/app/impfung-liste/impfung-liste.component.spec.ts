import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfungListeComponent } from './impfung-liste.component';

describe('ImpfungListeComponent', () => {
  let component: ImpfungListeComponent;
  let fixture: ComponentFixture<ImpfungListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfungListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfungListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
