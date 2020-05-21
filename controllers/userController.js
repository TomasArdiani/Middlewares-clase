const fs = require('fs');
const path = require('path');


function readHTML(filename) {
  let archivoHTML = fs.readFileSync(path.join(__dirname, '/../views/' + filename + '.html'), 'utf-8');
  return archivoHTML;
}

// Lee el archivo Json
function readJSONfile() {
  return JSON.parse(fs.readFileSync(userController.archivo, 'utf-8'));
}



let userController = {

  archivo: path.join(__dirname, '..') + '/data/users.json',

  searchByEmail: function (email) {
    let archivoJson = readJSONfile();
    let user = null;
    archivoJson.forEach((elem, i) => {
      if (elem["email"] == email) {
        user = elem;
      }
    });
    return user; // si no lo encuentra devuelve null
  },

  profile: function (req, res) {
    let usuario = userController.searchByEmail(req.params.email);
    res.render('profile', {usuario});
  },


  mostrarRegistro: function (req, res) {
    res.render ('registro');

  }

}

module.exports = userController;