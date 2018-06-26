import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemsComponent } from './post-items.component';

describe('PostItemsComponent', () => {
  let component: PostItemsComponent;
  let fixture: ComponentFixture<PostItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
