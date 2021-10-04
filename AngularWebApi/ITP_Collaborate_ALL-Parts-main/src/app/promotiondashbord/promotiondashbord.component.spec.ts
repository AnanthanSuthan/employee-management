import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotiondashbordComponent } from './promotiondashbord.component';

describe('PromotiondashbordComponent', () => {
  let component: PromotiondashbordComponent;
  let fixture: ComponentFixture<PromotiondashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotiondashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotiondashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
