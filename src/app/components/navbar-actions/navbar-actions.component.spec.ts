import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarActionsComponent } from './navbar-actions.component';

describe('NavbarActionsComponent', () => {
  let component: NavbarActionsComponent;
  let fixture: ComponentFixture<NavbarActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
