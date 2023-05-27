import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KonumPage } from './konum.page';

describe('KonumPage', () => {
  let component: KonumPage;
  let fixture: ComponentFixture<KonumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KonumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
