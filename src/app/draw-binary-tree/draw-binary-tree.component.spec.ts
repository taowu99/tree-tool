import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawBinaryTreeComponent } from './draw-binary-tree.component';

describe('DrawBinaryTreeComponent', () => {
  let component: DrawBinaryTreeComponent;
  let fixture: ComponentFixture<DrawBinaryTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawBinaryTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawBinaryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
