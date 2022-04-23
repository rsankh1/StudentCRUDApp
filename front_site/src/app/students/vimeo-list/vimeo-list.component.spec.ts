import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoListComponent } from './vimeo-list.component';

describe('VimeoListComponent', () => {
  let component: VimeoListComponent;
  let fixture: ComponentFixture<VimeoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VimeoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VimeoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
