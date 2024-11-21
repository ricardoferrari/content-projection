import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGuardComponent } from './template-guard.component';

describe('TemplateGuardComponent', () => {
  let component: TemplateGuardComponent;
  let fixture: ComponentFixture<TemplateGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
