const contactsPath = path.join(__dirname, "../db/contacts.json");
const { contactsList } = require("../module");
const path = require("path");

const listContacts = async () => {
  try {
    const contacts = await contactsList(contactsPath);
    console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
};

module.exports = listContacts;
