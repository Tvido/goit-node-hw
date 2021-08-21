const { contactsList, updateContacts } = require("../module/module");
const contactsPath = path.join(__dirname, "../db/contacts.json");

const removeContact = async (contactId) => {
  try {
    const contsctsList = await contactsList(contactsPath);
    const idx = contsctsList.findIndex(
      (item) => String(item.id) === String(contactId)
    );
    if (!idx === -1) {
      throw new Error("There is no product with this id");
    }
    const newContacts = contsctsList.filter(
      (item) => String(item.id) !== String(contactId)
    );
    await updateContacts(newContacts, contactsPath);
    console.table(newContacts);
    return contsctsList[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = removeContact;
