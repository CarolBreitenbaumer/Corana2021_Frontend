import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpfungListeItemComponent } from './impfung-liste-item.component';

describe('ImpfungListeItemComponent', () => {
  let component: ImpfungListeItemComponent;
  let fixture: ComponentFixture<ImpfungListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpfungListeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpfungListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
