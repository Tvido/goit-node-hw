const listContacts = require("./listContacts");

const getById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const selectContact = contacts.find(
      (item) => String(item.id) === String(contactId)
    );
    if (!selectContact) {
      return null;
    }
    return selectContact;
  } catch (error) {
    throw error;
  }
};

module.exports = getById;
