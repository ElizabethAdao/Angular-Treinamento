import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPerfilComponent } from './section-perfil.component';

describe('SectionPerfilComponent', () => {
  let component: SectionPerfilComponent;
  let fixture: ComponentFixture<SectionPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
