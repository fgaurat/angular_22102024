import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostChildComponent } from './host-child.component';

describe('HostChildComponent', () => {
  let component: HostChildComponent;
  let fixture: ComponentFixture<HostChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
