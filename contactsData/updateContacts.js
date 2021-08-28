const fs = require("fs/promises");

const filePath = require("./filePath");

const updateContacts = async (newContacts) => {
  const contuctsString = JSON.stringify(newContacts);
  await fs.writeFile(filePath, contuctsString);
};

module.exports = updateContacts;
