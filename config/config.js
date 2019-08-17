const path = require('path');
module.exports = {
  "development": {
    "host": "127.0.0.1",
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '..', 'DataBase', 'devProject.db'),
  }
}