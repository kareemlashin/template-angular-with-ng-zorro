import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapTranslateComponent } from './wrap-translate.component';

describe('WrapTranslateComponent', () => {
  let component: WrapTranslateComponent;
  let fixture: ComponentFixture<WrapTranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapTranslateComponent]
    });
    fixture = TestBed.createComponent(WrapTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
