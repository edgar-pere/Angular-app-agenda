import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactComponent } from './view-contact.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

describe('ViewContactComponent', () => {
  let component: ViewContactComponent;
  let fixture: ComponentFixture<ViewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table in a table tag', async(() => {
    fixture = TestBed.createComponent(ViewContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));
});
