const contactsPath = path.join(__dirname, "../db/contacts.json");
const { contactsList } = require("../module/module");

const getContactById = async (contactId) => {
  try {
    const contsctsList = await contactsList(contactsPath);
    const selectContact = contsctsList.find(
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

module.exports = getContactById;
