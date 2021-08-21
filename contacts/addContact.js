const contactsPath = path.join(__dirname, "../db/contacts.json");
const { contactsList } = require("../module/module");

const addContact = async (name, email, phone) => {
  try {
    const contsctsList = await contactsList(contactsPath);
    const newContact = {
      id: v4(),
      name: name,
      email: email,
      phone: phone,
    };

    const newContactsList = [...contsctsList, newContact];
    await updateContacts(newContactsList, contactsPath);

    console.table(newContact);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
