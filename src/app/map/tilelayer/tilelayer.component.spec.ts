import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLayerComponent } from './tilelayer.component';

describe('TilelayerComponent', () => {
	let component: TileLayerComponent;
	let fixture: ComponentFixture<TileLayerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TileLayerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TileLayerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
