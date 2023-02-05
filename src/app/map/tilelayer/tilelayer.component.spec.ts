import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilelayerComponent } from './tilelayer.component';

describe('TilelayerComponent', () => {
  let component: TilelayerComponent;
  let fixture: ComponentFixture<TilelayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilelayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
