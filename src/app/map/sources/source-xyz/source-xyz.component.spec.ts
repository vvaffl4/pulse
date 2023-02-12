import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceXyzComponent } from './source-xyz.component';

describe('SourceXyzComponent', () => {
  let component: SourceXyzComponent;
  let fixture: ComponentFixture<SourceXyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceXyzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceXyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
