module.exports = function (app) {
  
  
  
  app.get('*', function (req, res, next) {

    var name = req.params[0].substr(1)

    if (name === 'home')
      return res.redirect('/')

    if (!app.Project.get('pages ' + name))
      return next()

    app.sendPage(req, res, name)

  }) 
}
