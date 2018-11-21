import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DeleteContactComponent } from './delete-contact.component';
import { AppModule } from '../app.module';

describe('DeleteContactComponent', () => {
  let component: DeleteContactComponent;
  let fixture: ComponentFixture<DeleteContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AppModule],
      declarations: [ DeleteContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
