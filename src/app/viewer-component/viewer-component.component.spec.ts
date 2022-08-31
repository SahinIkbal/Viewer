import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerComponentComponent } from './viewer-component.component';

describe('ViewerComponentComponent', () => {
  let component: ViewerComponentComponent;
  let fixture: ComponentFixture<ViewerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
