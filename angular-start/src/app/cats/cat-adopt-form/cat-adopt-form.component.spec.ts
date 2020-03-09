import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAdoptFormComponent } from './cat-adopt-form.component';

describe('CatAdoptFormComponent', () => {
  let component: CatAdoptFormComponent;
  let fixture: ComponentFixture<CatAdoptFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAdoptFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAdoptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
