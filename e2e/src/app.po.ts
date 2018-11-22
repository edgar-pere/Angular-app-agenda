import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/home');
  }

  navigateToAdd() {
    return browser.get('/add-contact');
  }

  // navigateToEdit(id) {
  //   return browser.get(`/edit-contact/${id}`);
  // }

  // navigateToDelete(id) {
  //   return browser.get(`/delete-contact/${id}`);
  // }

  navigateToAbout() {
    return browser.get(`/about`);
  }

  addContact() {
    const firstName = element(by.css('#firstName'));
    const phone = element(by.css('#phone'));
    const addButton = element(by.css('#addButton'));

    firstName.sendKeys('add-contact testing from profractor');
    phone.sendKeys('123');
    addButton.click();
    return true;
  }

  // Problemas con el siguiente metodo: Al momento de ubicar el elemento este no ha
  // sido renderizado, tarda por el tiempo que tarda en llamarse a firebase y
  // generarse el elemento con la respuesta

  // editContact() {
  //   const firstName = element(by.css('#firstName'));
  //   const phone = element(by.css('#phone'));
  //   const editButton = element(by.css('#editButton'));

  //   firstName.sendKeys('edit-contact from profractor');
  //   phone.sendKeys('123');
  //   editButton.click();
  //   return true;
  // }


  // Obtiene los titulos de las respectivas vistas de donde se llaman
  getTitle() {
    return element(by.css('app-root div.h3')).getText();
  }

  // Obtiene el navbar que deberia estar presente en todas las vistas
  getNavbar() {
    return element(by.css('.navbar'));
  }

  // Obtiene la tabla en /home
  getTable() {
    return element(by.css('table'));
  }


  getButton(selector) {
    return element(by.css(selector));
  }

  // Devuelve la primera fila de la tabla en /home
  getFirstRow() {
    const rows = element(by.css('table>tbody>tr'));

    return rows;
  }

  // Devuelve la card que contiene la info del repo en /about
  getCard() {
    return element(by.css('div.card'));
  }
}
