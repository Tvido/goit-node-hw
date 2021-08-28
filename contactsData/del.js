const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const del = async (contactId) => {
  try {
    const contacts = await listContacts();
    const indx = contacts.findIndex(
      (item) => String(item.id) === String(contactId)
    );
    if (indx === -1) {
      return null;
    }
    const newContacts = contacts.filter(
      (item) => String(item.id) !== String(contactId)
    );
    await updateContacts(newContacts);
    return contacts[indx];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
