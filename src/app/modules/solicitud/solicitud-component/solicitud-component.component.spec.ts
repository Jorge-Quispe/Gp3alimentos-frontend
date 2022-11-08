import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudComponentComponent } from './solicitud-component.component';

describe('SolicitudComponentComponent', () => {
  let component: SolicitudComponentComponent;
  let fixture: ComponentFixture<SolicitudComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
