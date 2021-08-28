const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const { contactsList, updateContacts } = require("./module/module");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  try {
    const contacts = await contactsList(contactsPath);
    console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
};

const getContactById = async (contactId) => {
  try {
    const contactsList = await contactsList(contactsPath);
    const selectContact = contactsList.find(
      (item) => String(item.id) === String(contactId)
    );
    if (!selectContact) {
      throw new Error("There is no product with this id");
    }
    console.table(selectContact);
    return selectContact;
  } catch (error) {
    throw error;
  }
};

const removeContact = async (contactId) => {
  try {
    const contactsList = await contactsList(contactsPath);
    const idx = contactsList.findIndex(
      (item) => String(item.id) === String(contactId)
    );
    if (!idx === -1) {
      throw new Error("There is no product with this id");
    }
    const newContacts = contactsList.filter(
      (item) => String(item.id) !== String(contactId)
    );
    await updateContacts(newContacts, contactsPath);
    console.table(newContacts);
    return contactsList[idx];
  } catch (error) {
    throw error;
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contactsList = await contactsList(contactsPath);
    const newContact = {
      id: v4(),
      name: name,
      email: email,
      phone: phone,
    };

    const newContactsList = [...contactsList, newContact];
    await updateContacts(newContactsList, contactsPath);

    console.table(newContact);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
