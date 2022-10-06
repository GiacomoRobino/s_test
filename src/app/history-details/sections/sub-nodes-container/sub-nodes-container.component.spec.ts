import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNodesContainerComponent } from './sub-nodes-container.component';

describe('SubNodesContainerComponent', () => {
  let component: SubNodesContainerComponent;
  let fixture: ComponentFixture<SubNodesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubNodesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNodesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
