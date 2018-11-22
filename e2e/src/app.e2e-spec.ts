import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  // HOME
  it('should display Agenda in /home', () => {
    page.navigateToHome();
    expect(page.getTitle()).toEqual('Agenda');
  });

  it('should display navbar with 3 "a" tags in /home', () => {
    page.navigateToHome();
    expect(page.getNavbar()).toBeTruthy();
    expect(page.getButton('a#homeButton')).toBeTruthy();
    expect(page.getButton('a#addNewContactButton')).toBeTruthy();
    expect(page.getButton('a#aboutButton')).toBeTruthy();
  });

  it('should display the table in /home', () => {
    page.navigateToHome();
    expect(page.getTable()).toBeTruthy();
  });

  it('should display first row in the table in /home', () => {
    page.navigateToHome();
    expect(page.getFirstRow()).toBeTruthy();
  });
  // FIN HOME


  // ADD-CONTACT
  it('should display div.h3=Add new contact and navbar in /add-contact', () => {
    page.navigateToAdd();
    expect(page.getNavbar()).toBeTruthy();
    expect(page.getButton('a#homeButton')).toBeTruthy();
    expect(page.getButton('a#addNewContactButton')).toBeTruthy();
    expect(page.getButton('a#aboutButton')).toBeTruthy();

    expect(page.getTitle()).toEqual('Add new contact');
  });

  it('should add a new contact', () => {
    expect(page.addContact()).toBeTruthy();
  });
  // FIN ADD-CONTACT

  // Problemas con el siguiente test: Al momento de ubicar el elemento este no ha
  // sido renderizado, tarda por el tiempo que tarda en llamarse a firebase y
  // generarse el elemento con la respuesta

  // EDIT-CONTACT
  // it('should edit a contact', () => {
  //   page.navigateToEdit('1542765231394');
  //   expect(page.editContact()).toBeTruthy();
  // });
  // FIN EDIT-CONTRACT

  // DELETE-CONTACT
  // FIN DELETE-CONTACT


  // ABOUT
  it('should display navbar with 3 "a" tags in /home', () => {
    page.navigateToAbout();
    expect(page.getNavbar()).toBeTruthy();
    expect(page.getButton('a#homeButton')).toBeTruthy();
    expect(page.getButton('a#addNewContactButton')).toBeTruthy();
    expect(page.getButton('a#aboutButton')).toBeTruthy();
  });

  it('should display the card with the description and link of the repo', () => {
    page.navigateToAbout();
    expect(page.getCard()).toBeTruthy();
  });
  // FIN ABOUT
});
