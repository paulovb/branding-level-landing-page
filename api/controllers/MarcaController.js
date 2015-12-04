/**
 * MarcaController
 *
 * @description :: Server-side logic for managing brands
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  index: function (req, res, next) {
    Contact.create(req.params.all(), function userCreated (err, contact) {
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        return res.view({
          mensagem: 'Aconteceu algo errado, tente novamente!'
        })
      }

      return res.view({
        mensagem: 'Em breve entraremos em contato!'
      })

    });
  },

}
