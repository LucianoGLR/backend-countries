const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;
const { saveCountriesInDB } = require('./src/controllers/countriesControllers.js')

conn.sync({ force: true }).then(() => {
server.listen(port, () => {
  saveCountriesInDB();
  console.log(`Server listening on port ${port}`);
})
}).catch(error => console.error(error))
