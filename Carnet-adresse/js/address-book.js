"use strict";

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = "Address Book";

/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
  let contact;

  contact = new Object();
  contact.firstName = firstName;
  contact.lastName = lastName.toUpperCase();
  contact.phone = phone;

  switch (title) {
    case "1":
      contact.title = "Mme.";
      break;

    case "2":
      contact.title = "Mlle.";
      break;

    case "3":
      contact.title = "M.";
      break;
  }

  return contact;
}

function loadAddressBook() {
  let addressBook;

  // Chargement du carnet d'adresses depuis le DOM storage.
  addressBook = JSON.parse(localStorage.getItem(DOM_STORAGE_ITEM_NAME));

  // Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
  if (addressBook == null) {
    // Oui, création d'un carnet d'adresses vide.
    addressBook = new Array();
  }

  return addressBook;
}

function refreshAddressBook() {
  let addressBook = loadAddressBook();

  // Suppression de l'ensemble du carnet d'adresses HTML et ajout d'une UL vide

  let liste = "<ul>";
  // Affichage HTML du carnet d'adresses, un contact à la fois.
  for (let index = 0; index < addressBook.length; index++) {
    liste += `<li><a class="contact" data-index="${index}">${addressBook[index].firstName} ${addressBook[index].lastName}</a><i class="fa fa-trash-o remove"></i></li>`;
  }
  liste += "</ul>";
  document.querySelector("#address-book").innerHTML = liste;
}

function saveAddressBook(addressBook) {
  /*
   * sérialiser nos données en JSON.
   *
   *stockage dans le DOM storage.
   *
   * Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
   */
  let jsonData = JSON.stringify(addressBook);

  window.localStorage.setItem(DOM_STORAGE_ITEM_NAME, jsonData);
}
