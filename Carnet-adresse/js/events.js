"use strict";

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact() {
  // Réinitialisation du formulaire (efface les champs texte, etc.).
  // document.querySelector('#contact-form')[0].reset();

  // Basculement du formulaire en mode ajout puis affichage.
  document.querySelector("#contact-form").dataset.mode = "add";
  document.querySelector("#contact-form").reset();
  document.querySelector("#contact-form").classList.remove("hide");
}

function onClickClearAddressBook() {
  // Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
  saveAddressBook(new Array());

  // Mise à jour de l'affichage.
  document.querySelector("#contact-details").classList.add("hide");
  refreshAddressBook();
}

function onClickEditContact() {
  let addressBook;
  let contact;
  let index;

  index = this.dataset.index;

  addressBook = loadAddressBook();
  contact = addressBook[index];

  document.querySelector("#firstName").value = contact.firstName;
  document.querySelector("#lastName").value = contact.lastName;
  document.querySelector("#phone").value = contact.phone;

  // Sélection de la bonne <option> HTML de la liste déroulante.
  switch (contact.title) {
    case "Mme.":
      document.querySelector("#title").value = 1;
      break;

    case "Mlle.":
      document.querySelector("#title").value = 2;
      break;

    case "M.":
      document.querySelector("#title").value = 3;
      break;
  }

  // Basculement du formulaire en mode édition puis affichage.
  document.querySelector("#contact-form").dataset.mode = "edit";
  document.querySelector("#contact-form").classList.remove("hide");
}

function onClickSaveContact(e) {
  e.preventDefault();
  let addressBook;
  let contact;
  let index;

  // Création d'un objet contact avec les données du formulaire.
  contact = createContact(
    document.querySelector("select[name=title]").value,
    document.querySelector("input[name=firstName]").value,
    document.querySelector("input[name=lastName]").value,
    document.querySelector("input[name=phone]").value
  );

  addressBook = loadAddressBook();

  if (document.querySelector("#contact-form").dataset.mode == "add") {
    // Mode "ajout", il faut ajouter le contact au carnet d'adresses.

    addressBook.push(contact);
  } else {
    // Mode "édition", il faut modifier un contact existant.

    index = document.querySelector("#contact-details a").dataset.index;

    addressBook[index] = contact;
  }

  saveAddressBook(addressBook);

  // Mise à jour de l'affichage.
  document.querySelector("#contact-form").classList.add("hide");
  document.querySelector("#contact-details").classList.add("hide");
  refreshAddressBook();
}

function onClickShowContactDetails(elem) {
  let addressBook;
  let contact;
  let index;
  /**
   * elem contient la balise qui a déchenché l'événement
   * cette balise contient un data-attribut contenant l'index dans le tableau du contact
   * on accède aux data attributs grâce à la propriété datatset
   */
  index = elem.dataset.index;

  // Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
  addressBook = loadAddressBook();
  contact = addressBook[index];
  console.log(contact);
  /*
   * Affichage des données du contact, enregistrement du numéro (index) du contact dans
   * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
   */
  document.querySelector("#contact-details h3").textContent =
    contact.title + " " + contact.firstName + " " + contact.lastName;
  document.querySelector("#contact-details p").textContent = contact.phone;
  document.querySelector("#contact-details a").dataset.index = index;

  // Mise à jour de l'affichage.
  document.querySelector("#contact-details").classList.remove("hide");
}

function onClickRemoveOneContact(elem) {
  let i = elem.dataset.index;
  let addressBook = loadAddressBook();
  addressBook.splice(i, 1);
  saveAddressBook(addressBook);
  refreshAddressBook();
}
