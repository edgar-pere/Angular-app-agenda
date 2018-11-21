import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h4.card-title tag', async(() => {
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Agenda');
  }));

  it('should render information text in a p.card-text tag', async(() => {
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    // TSlinter marca error si hay una linea con mas de 150 caracteres de largo
    const text = 'This calendar app was created by José Padrón, as a ';
    const text2 = 'technical test using angular, bootstrap, font-awesome and doing CRUD with firebase';
    expect(compiled.querySelector('p').textContent).toContain(text + text2);
  }));

  it('should render link to repo in github in a "a" tag', async(() => {
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').href).toContain('https://github.com/josevenezuelapadron/Angular-app-agenda');
  }));
});
