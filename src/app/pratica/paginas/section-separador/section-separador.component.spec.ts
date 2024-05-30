import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeparadorComponent } from './section-separador.component';

describe('SectionSeparadorComponent', () => {
  let component: SectionSeparadorComponent;
  let fixture: ComponentFixture<SectionSeparadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSeparadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
