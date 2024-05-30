import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCabecalhoComponent } from './section-cabecalho.component';

describe('SectionCabecalhoComponent', () => {
  let component: SectionCabecalhoComponent;
  let fixture: ComponentFixture<SectionCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
