import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLsClientesComponent } from './section-ls-clientes.component';

describe('SectionLsClientesComponent', () => {
  let component: SectionLsClientesComponent;
  let fixture: ComponentFixture<SectionLsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLsClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
