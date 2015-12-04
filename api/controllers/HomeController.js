/**
 * MarcaController
 *
 * @description :: Server-side logic for managing brands
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var ab = require('express-ab');
var cookieParser = require('cookie-parser');
var myPageTest = ab.test('my-fancy-test');


module.exports = {

  index: function (req, res, next) {

    if (myPageTest()){
      res.view('homepage0');
    }

    if (myPageTest()){
      res.view('homepage1');
    }
  },

}
