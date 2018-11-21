import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContactComponent } from './add-contact.component';
import { AppModule } from '../app.module';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

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
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input firstName in a input#firstName tag', async(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#firstName')).toBeTruthy();
  }));

  it('should render input phone in a input#phone tag', async(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input#phone')).toBeTruthy();
  }));

  it('should render add button in a button#addButton tag', async(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#addButton')).toBeTruthy();
  }));
});
