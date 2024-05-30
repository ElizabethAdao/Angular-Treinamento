import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormulariosComponent } from './section-formularios.component';

describe('SectionFormulariosComponent', () => {
  let component: SectionFormulariosComponent;
  let fixture: ComponentFixture<SectionFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFormulariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
