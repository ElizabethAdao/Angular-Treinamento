import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeparadorContactoComponent } from './section-separador-contacto.component';

describe('SectionSeparadorContactoComponent', () => {
  let component: SectionSeparadorContactoComponent;
  let fixture: ComponentFixture<SectionSeparadorContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSeparadorContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeparadorContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
