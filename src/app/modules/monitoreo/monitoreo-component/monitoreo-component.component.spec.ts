import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoComponentComponent } from './monitoreo-component.component';

describe('MonitoreoComponentComponent', () => {
  let component: MonitoreoComponentComponent;
  let fixture: ComponentFixture<MonitoreoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoreoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
