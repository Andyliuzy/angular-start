import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProfileComponent } from './cat-profile.component';

describe('CatProfileComponent', () => {
  let component: CatProfileComponent;
  let fixture: ComponentFixture<CatProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
