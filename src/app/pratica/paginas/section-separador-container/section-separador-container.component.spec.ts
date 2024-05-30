import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeparadorContainerComponent } from './section-separador-container.component';

describe('SectionSeparadorContainerComponent', () => {
  let component: SectionSeparadorContainerComponent;
  let fixture: ComponentFixture<SectionSeparadorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSeparadorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeparadorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
