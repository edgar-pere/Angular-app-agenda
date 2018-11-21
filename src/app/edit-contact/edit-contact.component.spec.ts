import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditContactComponent } from './edit-contact.component';
import { AppModule } from '../app.module';

describe('EditContactComponent', () => {
  let component: EditContactComponent;
  let fixture: ComponentFixture<EditContactComponent>;

  // lo comentado era para poder renderizar el componente, ya que este necesita
  // un id en la URL para poderse iniciar, pero el codigo falla, quedará comentado
  // hasta solucionarse

  // class MockActivatedRoute extends ActivatedRoute {
  //   constructor() {
  //       super();
  //       this.params = of({id: 1542822170093});
  //   }
  // }

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
    fixture = TestBed.createComponent(EditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
