"use strict";

/************************************************************************************/
/********************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  // Installation des gestionnaires d'évènements.
  document
    .querySelector("#add-contact")
    .addEventListener("click", onClickAddContact);
  document
    .querySelector("#clear-address-book")
    .addEventListener("click", onClickClearAddressBook);
  document
    .querySelector("#save-contact")
    .addEventListener("click", onClickSaveContact);
  document
    .querySelector("#contact-details a")
    .addEventListener("click", onClickEditContact);

  /*
   * Installation d'un gestionnaire d'évènement "dans le futur", quand il y aura
   * des hyperliens ajoutés dans l'arbre DOM à partir du <ul id="address-book">.
   */
  document
    .querySelector("#address-book")
    .addEventListener("click", function (event) {
      console.log(event.target, this);
      if (event.target.classList.contains("contact")) {
        onClickShowContactDetails(event.target);
      } else if (event.target.classList.contains("remove")) {
        onClickRemoveOneContact(event.target);
      }
    });
  refreshAddressBook();
});
