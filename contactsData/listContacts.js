const fs = require("fs/promises");

const filePath = require("./filePath");

const listContacts = async () => {
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    throw err;
  }
};

module.exports = listContacts;
