const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const update = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(
      (item) => String(item.id) === String(contactId)
    );
    if (idx === -1) {
      return null;
    }
    contacts[idx] = { ...contacts[idx], ...body };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
