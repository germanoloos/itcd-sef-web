import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDbdComponent } from './nova-dbd.component';

describe('NovaDbdComponent', () => {
  let component: NovaDbdComponent;
  let fixture: ComponentFixture<NovaDbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaDbdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaDbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
