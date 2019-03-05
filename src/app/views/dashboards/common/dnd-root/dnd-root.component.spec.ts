import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndRootComponent } from './dnd-root.component';

describe('DndRootComponent', () => {
  let component: DndRootComponent;
  let fixture: ComponentFixture<DndRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
